package endpoints;

import java.util.List;

import io.javalin.Javalin;
import pojo.EmployeePojo;
import pojo.RequestPojo;
import service.EmployeeService;
import service.EmployeeServiceImpl;
import service.RequestService;
import service.RequestServiceImpl;

public class ErsMain {

	public static void main(String[] args) {

		EmployeeService employeeService = new EmployeeServiceImpl();
		RequestService requestService = new RequestServiceImpl();

		// create and start a server
		Javalin myServer = Javalin.create(config -> config.enableCorsForAllOrigins()).start(4040);
		System.out.println("Service listening on port " + myServer.port());

		// fetch all employees
		myServer.get("/api/manager/all-employees", ctx -> {
			List<EmployeePojo> allEmployees = employeeService.fetchAllEmployees();
			ctx.json(allEmployees);
		});

		// fetch all requests
		myServer.get("/api/manager/requests", ctx -> {
			List<RequestPojo> allRequests = requestService.fetchAllRequests();
			ctx.json(allRequests);
		});

		// fetch all pending requests
		myServer.get("/api/manager/requests/pending", ctx -> {
			List<RequestPojo> allPendingRequests = requestService.fetchPendingRequests();
			ctx.json(allPendingRequests);
		});

		// fetch all resolved requests
		myServer.get("/api/manager/requests/resolved", ctx -> {
			List<RequestPojo> allResolvedRequests = requestService.fetchResolvedRequests();
			ctx.json(allResolvedRequests);
		});

		// fetch requests by ID
		myServer.get("/api/manager/requests/{id}", ctx -> {
			String id = ctx.pathParam("id");
			List<RequestPojo> rqById = requestService.fetchEmployeeRequests(Integer.parseInt(id));
			ctx.json(rqById);
		});

		// login employee
		myServer.post("/api/login", ctx -> {
			EmployeePojo login = ctx.bodyAsClass(EmployeePojo.class);
			
			EmployeePojo returnedLogin = employeeService.loginEmployee(login);
			
			if(returnedLogin == null) {
				System.out.println(returnedLogin);
			}else {
			ctx.json(returnedLogin);
			}
		});

//		new code 3/9/22
		
		// fetch one request
		myServer.get("/api/manager/request/{id}", ctx -> {
			String id = ctx.pathParam("id");
			RequestPojo oneRequest = requestService.fetchOneRequest(Integer.parseInt(id));
			
			ctx.json(oneRequest);
		});
		
		// update request
		myServer.put("/api/manager/requests", ctx -> {
			RequestPojo updateRequest = ctx.bodyAsClass(RequestPojo.class);
			RequestPojo returnedRequest = requestService.updateRequest(updateRequest);
			
			ctx.json(returnedRequest);
		});

		// add a request
		myServer.post("/api/associate/requests/add", ctx -> {
			RequestPojo newRequest = ctx.bodyAsClass(RequestPojo.class);
			RequestPojo returnedRequest = employeeService.createNewRequest(newRequest);

			ctx.json(returnedRequest);

		});

		// fetch requests by ID
		myServer.get("/api/associate/requests/{id}", ctx -> {
			String id = ctx.pathParam("id");
			List<RequestPojo> rqById = requestService.fetchEmployeeRequests(Integer.parseInt(id));
			ctx.json(rqById);
		});

		// fetch all pending requests by associate
		myServer.get("/api/associate/requests/pending/{id}", ctx -> {
			String id = ctx.pathParam("id");
			List<RequestPojo> allPendingRequests = requestService.fetchEmployeePendingRequests(Integer.parseInt(id));
			ctx.json(allPendingRequests);
		});

		// fetch all resolved requests by associate
		myServer.get("/api/associate/requests/resolved/{id}", ctx -> {
			String id = ctx.pathParam("id");
			List<RequestPojo> allResolvedRequests = requestService.fetchEmployeeResolvedRequests(Integer.parseInt(id));
			ctx.json(allResolvedRequests);
		});

	}

}
