package com.tsaplya.web;

import com.tsaplya.web.exception.RecordNotFoundException;
import com.tsaplya.web.model.EmployeeEntity;
import com.tsaplya.web.service.EmployeeService;
import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
public class EmployeeMvcController {
  private final EmployeeService service;
  public EmployeeMvcController(EmployeeService service) {
    this.service = service;
  }

  @GetMapping("list")
  public ResponseEntity<List<EmployeeEntity>> getAllEmployees() {
    List<EmployeeEntity> employeeEntities = service.getAllEmployees();
    return ResponseEntity.ok(employeeEntities);
  }

  @RequestMapping(path = {"edit/{id}"})
  public ResponseEntity<String> editEmployeeById(
      @RequestBody Model model,
      @PathVariable("id") Optional<Long> id)
      throws RecordNotFoundException {
    if (id.isPresent()) {
      EmployeeEntity entity = service.getEmployeeById(id.get());
      model.addAttribute("employee", entity);
    } else {
      model.addAttribute("employee", new EmployeeEntity());
    }
    return ResponseEntity.ok("");
  }

  @RequestMapping(path = "/delete/{id}")
  public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long id)
      throws RecordNotFoundException {
    service.deleteEmployeeById(id);
    return ResponseEntity.ok("");
  }

  @PostMapping("/createEmployee")
  public ResponseEntity<String> createOrUpdateEmployee(@RequestBody EmployeeEntity employee) {
    service.createOrUpdateEmployee(employee);
    return ResponseEntity.ok("");
  }
}
