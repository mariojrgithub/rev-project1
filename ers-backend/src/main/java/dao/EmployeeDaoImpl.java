package dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import exceptions.SystemException;
import pojo.EmployeePojo;
import pojo.RequestPojo;

public class EmployeeDaoImpl implements EmployeeDao {

	public static final Logger LOG = LogManager.getLogger(EmployeeDaoImpl.class);

	public EmployeePojo fetchOneEmployee(String employeeEmail) throws SystemException {

		LOG.info("Entered fetchOneEmployee() in DAO");

		EmployeePojo employeePojo = null;

		Connection conn = DBUtil.obtainConnection();

		try {
			Statement stmt = conn.createStatement();

			String query = "SELECT * FROM employee_details " + "WHERE employee_email=" + "'" + employeeEmail + "'";

			ResultSet rs = stmt.executeQuery(query);

			if (rs.next()) {
				employeePojo = new EmployeePojo(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),
						rs.getString(5));
			}

		} catch (SQLException e) {
			throw new SystemException();
		}

		LOG.info("Exited fetchOneEmployee() in DAO");

		return employeePojo;

	}

	public EmployeePojo fetchOneEmployee(int employeeId) throws SystemException {

		LOG.info("Entered fetchOneEmployee() in DAO");

		EmployeePojo employeePojo = null;

		Connection conn = DBUtil.obtainConnection();

		try {
			Statement stmt = conn.createStatement();

			String query = "SELECT * FROM employee_details " + "WHERE employee_id=" + employeeId;

			ResultSet rs = stmt.executeQuery(query);

			if (rs.next()) {
				employeePojo = new EmployeePojo(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),
						rs.getString(5));
			}

		} catch (SQLException e) {
			throw new SystemException();
		}

		LOG.info("Exited fetchOneEmployee() in DAO");
		return employeePojo;
	}

	public EmployeePojo loginEmployee(EmployeePojo employeePojo)
			throws SystemException {
		LOG.info("Entered loginEmployee() in DAO");

//		EmployeePojo employeePojo = null;
		EmployeePojo employeePojo2 = null;

		Connection conn = DBUtil.obtainConnection();

		try {
			Statement stmt = conn.createStatement();

//			employeePojo = fetchOneEmployee(employeeEmail);

			String query = "SELECT * FROM employee_details WHERE " + " employee_email=" + "'"
					+ employeePojo.getEmployeeEmail() + "'" + " AND employee_password=" + "'" + employeePojo.getEmployeePassword()
					+ "' AND employee_role='" + employeePojo.getEmployeeRole() + "'";

			ResultSet rs = stmt.executeQuery(query);

			if (rs.next()) {
				employeePojo2 = new EmployeePojo(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4),
						rs.getString(5));
			}

		} catch (SQLException e) {
			throw new SystemException();
		}

		LOG.info("Exited loginEmployee() in DAO");
		return employeePojo2;
	}

	public List<EmployeePojo> fetchAllEmployees() throws SystemException {
		LOG.info("Entered fetchAllEmployees() in DAO");

		// collection of employees
		List<EmployeePojo> allEmployees = new ArrayList<>();

		Connection conn = DBUtil.obtainConnection();

		Statement stmt;
		try {
			stmt = conn.createStatement();

			String query = "SELECT * FROM employee_details";

			ResultSet rs = stmt.executeQuery(query);

			// iterate through result set
			while (rs.next()) {
				// copy each record into a EmployeePojo object
				EmployeePojo employeePojo = new EmployeePojo(rs.getInt(1), rs.getString(2), rs.getString(3),
						rs.getString(4), rs.getString(5));

				// add EmployeePojo to ArrayList
				allEmployees.add(employeePojo);
			}

		} catch (SQLException e) {
			throw new SystemException();
		}

		LOG.info("Exited fetchAllEmployees() in DAO");
		return allEmployees;
	}

	public RequestPojo createNewRequest(RequestPojo requestPojo) throws SystemException {
		LOG.info("Entered createNewRequest() in DAO");

		RequestPojo requestPojo2 = null;

		Connection conn = DBUtil.obtainConnection();

		try {
//			EmployeePojo requestEmployee = fetchOneEmployee(requestPojo.getEmployeeId());

			Statement stmt = conn.createStatement();

			// insert transaction
			String queryInsertRequest = "INSERT INTO expense_details(expense_amount, employee_id, expense_status) VALUES("
					+ requestPojo.getExpenseAmount() + ", " + requestPojo.getEmployeeId() + ", 'pending')";

			conn.setAutoCommit(false);

			int rows = stmt.executeUpdate(queryInsertRequest);

			conn.commit();

			// Obtain transaction
			String queryRequest = "SELECT * FROM expense_details WHERE employee_id=" + requestPojo.getEmployeeId();

			ResultSet rsRequest = stmt.executeQuery(queryRequest);

			if (rsRequest.next()) {
				requestPojo2 = new RequestPojo(rsRequest.getInt(1), rsRequest.getLong(2), rsRequest.getInt(3),
						rsRequest.getString(4), rsRequest.getString(5), rsRequest.getString(6), rsRequest.getString(7));
			}

		} catch (SQLException e) {
			try {
				conn.rollback();
			} catch (SQLException e1) {
				throw new SystemException();
			}
			throw new SystemException();
		}

		LOG.info("Exited createNewRequest() in DAO");
		return requestPojo2;
	}

}
