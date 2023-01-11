package com.novante.backendrestapi.controller;

import com.novante.backendrestapi.DTO.CustomerDTO;
import com.novante.backendrestapi.entity.Customer;
import com.novante.backendrestapi.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/customer")
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

    @GetMapping(value = "/getallcustomers")
    public ResponseEntity<List<CustomerDTO>> getAllCustomers(){
        List<Customer> customerList = customerService.getAllCustomers();
        List<CustomerDTO> customerDTOList = customerList
                .stream()
                .map(customer -> modelMapper.map(customer, CustomerDTO.class))
                .collect(Collectors.toList());
        return new ResponseEntity<>(customerDTOList, HttpStatus.OK);
    }

    @PatchMapping(value = "/updatecustomer/{customerNumber}")
    public ResponseEntity<CustomerDTO> updateCustomer(@RequestBody Customer customer, @PathVariable Long customerNumber){
        Customer foundCustomer = customerService.updateCustomer(customer, customerNumber);
        CustomerDTO customerDTO = modelMapper.map(foundCustomer, CustomerDTO.class);
        return new ResponseEntity<>(customerDTO, HttpStatus.OK);
    }

    @DeleteMapping(value = "/deletecustomer/{customerNumber}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long customerNumber){
        ResponseEntity<String> res = null;
        // change to trycatch later?
        int customerDeleteResult = customerService.deleteCustomer(customerNumber);
        if (customerDeleteResult == 1){
            res = new ResponseEntity<>("Customer with customer number " + customerNumber + " successfully deleted.", HttpStatus.OK);
        } else if (customerDeleteResult == 0){
            res = new ResponseEntity<>("Customer with customer number " + customerNumber + " not found.", HttpStatus.NOT_FOUND);
        }
        return res;
    }

}
