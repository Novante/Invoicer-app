package com.novante.backendrestapi.repository;

import com.novante.backendrestapi.entity.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    @Query("SELECT a FROM Customer a WHERE a.customerNumber =: customerNumber")
    Customer findCustomerByCustomerNumber(@Param("customerNumber") Long customerNumber);

}
