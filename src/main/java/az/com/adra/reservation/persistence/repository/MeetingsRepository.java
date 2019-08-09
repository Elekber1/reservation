package az.com.adra.reservation.persistence.repository;

import az.com.adra.reservation.persistence.entity.Meetings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingsRepository extends JpaRepository<Meetings, Long> {
}
