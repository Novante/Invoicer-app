package com.novante.backendrestapi.controller;

import com.novante.backendrestapi.entity.Customer;
import com.novante.backendrestapi.service.CustomerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController (CustomerService customerService){
        this.customerService = customerService;
    }

    @PostMapping(value = "/createcustomer")
    public void createCustomer(@RequestBody Customer customer){
        customerService.createCustomer(customer);
    }

}
