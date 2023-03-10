package com.novante.backendrestapi.service;

import com.novante.backendrestapi.entity.Customer;
import com.novante.backendrestapi.repository.CustomerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

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
                if (customer.getCustomerNumber() == null){
                    customer.setCustomerNumber(customerRepository.findHighestCustomerNumber() + 1);
                }
                customerRepository.save(customer);
            }
        }
    }

    public Customer getCustomerByCustomerNumber(Long customerNumber) {
        Customer foundCustomer = customerRepository.findCustomerByCustomerNumber(customerNumber);

        if (foundCustomer == null) {
            // throw exception
        }
        return foundCustomer;
    }

    public Customer updateCustomer(Customer customer, Long customerNumber) {
        Customer foundCustomer = null;
        if (customer == null) {
            // throw exception
        } else {
            foundCustomer = customerRepository.findCustomerByCustomerNumber(customerNumber);
            if (foundCustomer == null) {
                // throw exception
            } else {
                foundCustomer.setCustomerNumber(customer.getCustomerNumber());
                if (customer.getOrgNr() != null) {
                    foundCustomer.setOrgNr(customer.getOrgNr());
                }
                if (customer.getName() != null) {
                    foundCustomer.setName(customer.getName());
                }
                if (customer.getAddress() != null) {
                    foundCustomer.setAddress(customer.getAddress());
                }
                if (customer.getPhone() != null) {
                    foundCustomer.setPhone(customer.getPhone());
                }
                if (customer.getEmail() != null) {
                    foundCustomer.setEmail(customer.getEmail());
                }
                customerRepository.save(foundCustomer);
            }
        }
        return foundCustomer;
    }

    public int deleteCustomer(Long customerNumber) {
        Customer foundCustomer = customerRepository.findCustomerByCustomerNumber(customerNumber);

        if (foundCustomer == null){
            // exception
            return 0;
        } else {
            customerRepository.delete(foundCustomer);
        }
        return 1;
    }

    public List<Customer> getAllCustomers() {
        List<Customer> allCustomers = customerRepository.findAll();
        if (allCustomers.size() == 0){
            // throw error
        }
        return allCustomers;
    }
}
