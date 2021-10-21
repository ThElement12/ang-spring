package com.angspring.springboot.backend.apirest.springbootbackapirest.models.services;

import com.angspring.springboot.backend.apirest.springbootbackapirest.models.entity.Cliente;

import java.util.List;

public interface IClienteService {

    public List<Cliente> findAll();
}
