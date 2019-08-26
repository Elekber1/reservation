package az.com.adra.reservation.persistence.service;


import az.com.adra.reservation.persistence.entity.DoReserv;
import az.com.adra.reservation.persistence.entity.Meetings;
import az.com.adra.reservation.persistence.repository.DoReservRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class DoReservServiceImpl implements DoReservService {

    @Autowired
    private DoReservRepository doReservRepository;



    @Override
    public DoReserv findOne(Long id) {
        return doReservRepository.findById(id).orElse(null);
    }

    @Override
    public List<DoReserv> findAll() {
        return doReservRepository.findAll();
    }

    @Override
    public void remove(Long id) {
        doReservRepository.deleteById(id);
    }

    @Override
    public DoReserv save(DoReserv doReserv) {
        return doReservRepository.save(doReserv);
    }

    @Override
    public DoReserv update(DoReserv doReserv) {
        return doReservRepository.update(doReserv);
    }


    @Override
    public List<DoReserv> findByFullnameAndDateAndMeetings(String fullname, Date date, Meetings meetings) {
        return doReservRepository.findByFullnameAndDateAndMeetings(fullname, date, meetings);
    }



}

