package com.tsaplya.web.repository;

import com.tsaplya.web.model.EmployeeEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository 
			extends CrudRepository<EmployeeEntity, Long> {
}
