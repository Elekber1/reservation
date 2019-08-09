package az.com.adra.reservation.persistence.service;

import az.com.adra.reservation.persistence.entity.Meetings;
import az.com.adra.reservation.persistence.repository.MeetingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetingsServiceImpl implements MeetingsService {

    @Autowired
    private MeetingsRepository meetingsRepository;


    @Override
    public List<Meetings> findAll() {

        return meetingsRepository.findAll();
    }
}
