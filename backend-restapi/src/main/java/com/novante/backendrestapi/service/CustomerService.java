package com.novante.backendrestapi.service;

import com.novante.backendrestapi.entity.Customer;
import com.novante.backendrestapi.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public void createCustomer(Customer customer) {
        if (customer == null) {
            // throw exception
        } else {
            Customer foundCustomer = customerRepository.findCustomerByCustomerNumber(customer.getCustomerNumber());
            if (foundCustomer != null) {
                // throw exception
            } else {
                customerRepository.save(customer);
            }
        }
    }

}
