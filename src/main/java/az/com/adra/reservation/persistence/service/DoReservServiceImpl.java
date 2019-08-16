package az.com.adra.reservation.persistence.service;


import az.com.adra.reservation.persistence.entity.DoReserv;
import az.com.adra.reservation.persistence.entity.Meetings;
import az.com.adra.reservation.persistence.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Service
public class DoReservServiceImpl implements DoReservService {

    @Autowired
    private PersonRepository personRepository;



    @Override
    public DoReserv findOne(Long id) {
        return personRepository.findById(id).orElse(null);
    }

    @Override
    public List<DoReserv> findAll() {

        return personRepository.findAll();
    }

    @Override
    public void remove(Long id) {
        personRepository.deleteById(id);
    }

    @Override
    public DoReserv save(DoReserv doReserv) {
        return personRepository.save(doReserv);
    }

    @Override
    public DoReserv update(Long id, DoReserv doReserv) {
        return personRepository.update(id);
    }


    @Override
    public List<DoReserv> findByFullnameAndDateAndMeetings(String fullname, Date date, Meetings meetings) {
        return personRepository.findByFullnameAndDateAndMeetings(fullname, date, meetings);
    }




}

