package az.com.adra.reservation.persistence.repository;

import az.com.adra.reservation.persistence.entity.People;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PeopleRepository extends JpaRepository<People, Long> {

}
