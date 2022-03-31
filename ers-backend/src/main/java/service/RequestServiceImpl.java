package service;

import java.util.List;

import dao.RequestDao;
import dao.RequestDaoImpl;
import exceptions.SystemException;
import pojo.RequestPojo;

public class RequestServiceImpl implements RequestService {

	RequestDao requestDao;

	public RequestServiceImpl() {
		requestDao = new RequestDaoImpl();
	}

	@Override
	public List<RequestPojo> fetchAllRequests() throws SystemException {
		return requestDao.fetchAllRequests();
	}

	@Override
	public List<RequestPojo> fetchPendingRequests() throws SystemException {
		return requestDao.fetchPendingRequests();
	}

	@Override
	public List<RequestPojo> fetchResolvedRequests() throws SystemException {
		return requestDao.fetchResolvedRequests();
	}

	@Override
	public List<RequestPojo> fetchEmployeeRequests(int employeeId) throws SystemException {
		return requestDao.fetchEmployeeRequests(employeeId);
	}

	@Override
	public List<RequestPojo> fetchEmployeePendingRequests(int employeeId) throws SystemException {
		return requestDao.fetchEmployeePendingRequests(employeeId);
	}

	@Override
	public List<RequestPojo> fetchEmployeeResolvedRequests(int employeeId) throws SystemException {
		return requestDao.fetchEmployeeResolvedRequests(employeeId);
	}

	@Override
	public RequestPojo updateRequest(RequestPojo requestPojo) throws SystemException {
		return requestDao.updateRequest(requestPojo);
	}

	@Override
	public RequestPojo fetchOneRequest(int requestId) throws SystemException {
		return requestDao.fetchOneRequest(requestId);
	}

}
