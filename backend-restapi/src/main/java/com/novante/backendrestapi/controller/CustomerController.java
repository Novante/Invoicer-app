package com.novante.backendrestapi.controller;

import com.novante.backendrestapi.DTO.CustomerDTO;
import com.novante.backendrestapi.entity.Customer;
import com.novante.backendrestapi.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerController {

    private final CustomerService customerService;
    private final ModelMapper modelMapper;

    public CustomerController (CustomerService customerService, ModelMapper modelMapper){
        this.customerService = customerService;
        this.modelMapper = modelMapper;
    }

    @PostMapping(value = "/createcustomer")
    public void createCustomer(@RequestBody Customer customer){
        customerService.createCustomer(customer);
    }

    @GetMapping(value = "/getcustomer/{customerNumber}")
    public ResponseEntity<CustomerDTO> getCustomerByCustomerNumber(@PathVariable Long customerNumber){
        Customer foundCustomer = customerService.getCustomerByCustomerNumber(customerNumber);
        CustomerDTO customerDTO = modelMapper.map(foundCustomer, CustomerDTO.class);
        return new ResponseEntity<>(customerDTO, HttpStatus.OK);
    }

}
