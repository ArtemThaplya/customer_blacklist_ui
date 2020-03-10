package com.tsaplya.web;

import com.tsaplya.web.exception.RecordNotFoundException;
import com.tsaplya.web.model.EmployeeEntity;
import com.tsaplya.web.service.EmployeeService;
import java.security.Principal;
import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class EmployeeMvcController {
  private final EmployeeService service;
  public EmployeeMvcController(EmployeeService service) {
    this.service = service;
  }

//  @GetMapping("list")
//  public ResponseEntity<List<EmployeeEntity>> getAllEmployees() {
//    List<EmployeeEntity> employeeEntities = service.getAllEmployees();
//    return ResponseEntity.ok(employeeEntities);
//  }


  @RequestMapping("/")
  public String getAllEmployees(Model model) {
    List<EmployeeEntity> list = service.getAllEmployees();
    model.addAttribute("employees", list);
    return "list";
  }

  @RequestMapping(path = {"/edit", "/edit/{id}"})
  public String editEmployeeById(Model model, @PathVariable("id") Optional<Long> id)
      throws RecordNotFoundException {
    if (id.isPresent()) {
      EmployeeEntity entity = service.getEmployeeById(id.get());
      model.addAttribute("employee", entity);
    } else {
      model.addAttribute("employee", new EmployeeEntity());
    }
    return "add-edit-employee";
  }

  @RequestMapping(path = "/delete/{id}")
  public String deleteEmployeeById(Model model, @PathVariable("id") Long id)
      throws RecordNotFoundException {
    service.deleteEmployeeById(id);
    return "redirect:/";
  }

  @RequestMapping(path = "/createEmployee", method = RequestMethod.POST)
  public String createOrUpdateEmployee(EmployeeEntity employee) {
    service.createOrUpdateEmployee(employee);
    return "redirect:/";
  }
}
