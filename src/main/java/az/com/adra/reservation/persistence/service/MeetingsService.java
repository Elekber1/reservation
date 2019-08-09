package az.com.adra.reservation.persistence.service;

import az.com.adra.reservation.persistence.entity.Meetings;

import java.util.List;

public interface MeetingsService {

    public List<Meetings> findAll();

}
