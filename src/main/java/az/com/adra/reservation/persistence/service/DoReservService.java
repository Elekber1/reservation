package az.com.adra.reservation.persistence.service;

import az.com.adra.reservation.persistence.entity.Meetings;
import az.com.adra.reservation.persistence.entity.DoReserv;

import java.sql.Date;
import java.util.List;

public interface DoReservService {


    public DoReserv findOne(Long id);

    public List<DoReserv> findAll();

    public void remove(Long id);

    public DoReserv save(DoReserv doReserv);

    public DoReserv update(DoReserv doReserv);

    public List<DoReserv> findByFullnameAndDateAndMeetings(String fullname, Date date, Meetings meetings);


}
