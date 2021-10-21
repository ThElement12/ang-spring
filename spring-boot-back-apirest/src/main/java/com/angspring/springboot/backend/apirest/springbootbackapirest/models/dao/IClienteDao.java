package com.angspring.springboot.backend.apirest.springbootbackapirest.models.dao;

import com.angspring.springboot.backend.apirest.springbootbackapirest.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteDao extends CrudRepository<Cliente, Long> {

}
