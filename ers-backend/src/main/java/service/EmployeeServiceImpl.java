package service;

import java.util.List;

import dao.EmployeeDao;
import dao.EmployeeDaoImpl;
import exceptions.SystemException;
import pojo.EmployeePojo;
import pojo.RequestPojo;

public class EmployeeServiceImpl implements EmployeeService {
	
	EmployeeDao employeeDao;
	
	public EmployeeServiceImpl() {
		employeeDao = new EmployeeDaoImpl();
	}

	@Override
	public EmployeePojo fetchOneEmployee(String employeeEmail) throws SystemException {
		return employeeDao.fetchOneEmployee(employeeEmail);
	}

	@Override
	public EmployeePojo fetchOneEmployee(int employeeId) throws SystemException {
		return employeeDao.fetchOneEmployee(employeeId);
	}

	@Override
	public EmployeePojo loginEmployee(EmployeePojo employeePojo) throws SystemException {
		return employeeDao.loginEmployee(employeePojo);
	}

	@Override
	public List<EmployeePojo> fetchAllEmployees() throws SystemException {
		return employeeDao.fetchAllEmployees();
	}

	@Override
	public RequestPojo createNewRequest(RequestPojo requestPojo) throws SystemException {
		return employeeDao.createNewRequest(requestPojo);
	}

}
