package az.com.adra.reservation.persistence.service;

import az.com.adra.reservation.persistence.entity.People;
import az.com.adra.reservation.persistence.repository.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeopleServiceImpl implements PeopleService {

    @Autowired
    private PeopleRepository peopleRepository;


    @Override
    public List<People> findAll() {
        return peopleRepository.findAll();
    }
}
