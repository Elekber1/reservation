package az.com.adra.reservation.controller;


import az.com.adra.reservation.model.DoReservDto;
import az.com.adra.reservation.model.MeetingsDto;


import az.com.adra.reservation.model.PeopleDto;
import az.com.adra.reservation.persistence.entity.DoReserv;
import az.com.adra.reservation.persistence.entity.Meetings;
import az.com.adra.reservation.persistence.service.MeetingsService;
import az.com.adra.reservation.persistence.service.DoReservService;
import az.com.adra.reservation.persistence.service.PeopleService;
import com.sun.xml.internal.bind.v2.model.core.ID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


import javax.validation.Valid;
import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class
ReservController {

    @Autowired
    private DoReservService doReservService;

    @Autowired
    private MeetingsService meetingsService;

    @Autowired
    private PeopleService peopleService;

    public List<DoReservDto> doReservList(){
    List<DoReservDto> doReservDtos = doReservService.findAll()
            .stream()
            .map(p -> new DoReservDto(p.getId(),  p.getFullname(),p.getTopic(),p.getDate(),p.getStartTime(),p.getEndTime(),
                    p.getMeetings(),p.getStatus()))
            .collect(Collectors.toList());

        return doReservDtos;
    }


    public List<MeetingsDto> meetingsList(){
        List<MeetingsDto> list = meetingsService.findAll()
                .stream()
                .map(m-> new MeetingsDto(m.getId(), m.getRoom()))
                .collect(Collectors.toList());

        return list;
    }

    public List<PeopleDto> peopleDtoList(){
        List<PeopleDto> list =  peopleService.findAll()
                .stream()
                .map(p -> new PeopleDto(p.getName()))
                .collect(Collectors.toList());

        return list;
    }

    public List<DoReservDto> advancedSearch(DoReservDto doReservSearch){

        List<DoReservDto> searchList = doReservService.findByFullnameAndDateAndMeetings(doReservSearch.getFullname(),doReservSearch.getDate(),
                doReservSearch.getMeetings())
                .stream()
                .map(p ->new DoReservDto(p.getId(), p.getFullname(),p.getTopic(),p.getDate(),p.getStartTime(),p.getEndTime(),p.getMeetings(),
                        p.getStatus()))
                .collect(Collectors.toList());

        return searchList;
    }

        public DoReservDto doReservEditList(Long id){
            DoReserv doReservDto = doReservService.findOne(id);

            return doReservDto.person();
        }

   @RequestMapping(value = "/",method = RequestMethod.GET)
    public ModelAndView home (ModelAndView view){


       view.addObject("doReservDto", new DoReservDto());
       view.addObject("meetings",new MeetingsDto());
       view.addObject("meetingsList",meetingsList());
       view.addObject("doReservList",doReservList());
       view.addObject("personId", new PeopleDto());
       view.addObject("peopleDtoList",peopleDtoList());
       view.setViewName("table");

       return view;
   }


   @RequestMapping(value = "/search", method = RequestMethod.GET)
   public ModelAndView searchPerson (ModelAndView view, DoReservDto doReservSearch, @RequestParam("fullname") String fullname, @RequestParam("date")Date date, @RequestParam("meetings") Meetings meetings){
       view.addObject("meetings",new MeetingsDto());
       view.addObject("meetingsList",meetingsList());
       doReservService.findByFullnameAndDateAndMeetings(fullname, date, meetings);
       view.addObject("doReservDto",new DoReservDto());
       view.addObject("advancedSearch",advancedSearch(doReservSearch));

       view.setViewName("advancedSearch");

        return view;
   }

    @RequestMapping(value = "/delete/{id}",method = RequestMethod.GET)
    public ModelAndView delete(ModelAndView modelAndView, @PathVariable("id") Long id){

        doReservService.remove(id);
        modelAndView.addObject("doReservDto",new DoReservDto());
        modelAndView.addObject("doReservList",doReservList());
        System.out.println("removed id : "+id);
        System.out.println();
        modelAndView.setViewName("redirect:/");
        return modelAndView;

   }

    @PostMapping(value = "/addReserv")
    public ModelAndView addReserv (MeetingsDto meetings , DoReservDto doReservDto, ModelAndView view){
        System.out.println("Controllllerrrrrrrrrrrrrrrrrrr");
        doReservService.save(doReservDto.person());
        System.out.println(doReservDto);
        System.out.println(meetings);
        view.addObject("meetings",new MeetingsDto());
        view.addObject("meetingsList",meetingsList());
        view.addObject("doReservDto", new DoReservDto());
        view.addObject("doReservList",doReservList());
        view.setViewName("redirect:/");

        return view;
    }

    @RequestMapping("/edit")
    @ResponseBody
    public DoReservDto edit(@RequestParam("id") Long id, ModelAndView view, MeetingsDto meetings){
        DoReservDto doReservDto1 = doReservEditList(id);
        view.addObject("doReservDto", new DoReservDto());
        view.addObject("doReservList",doReservList());
        view.addObject("meetings",new MeetingsDto());
        view.addObject("meetingsList",meetingsList());
//        view.setViewName("redirect:/");
        return doReservDto1;
    }

    @RequestMapping(value = "/updateReserv/{id}", method = RequestMethod.GET)
    public DoReserv update(@PathVariable("id") Long id, @Valid @RequestBody DoReserv doReserv, ModelAndView view){
          doReserv = doReservService.findOne(id);
        DoReserv doReserv1  =  doReservService.update(doReserv);
        view.addObject("meetings",new MeetingsDto());
        view.addObject("meetingsList",meetingsList());
        view.addObject("doReservDto", new DoReservDto());
        view.addObject("doReservList",doReservList());
        view.setViewName("table");
        System.out.println("ID**********ID**********ID ==== "+id);
        return doReserv1;
    }



}
