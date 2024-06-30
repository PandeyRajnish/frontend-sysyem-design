// Load the proto file
const PROTO_PATH = "./customers.proto";

// import grpc and proto loader
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

// These are the configuration what are u going to allow
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

// Load the package definition
const customersProto = grpc.loadPackageDefinition(packageDefinition);

// Create the gRPC server
const server = new grpc.Server();

// Data
const customers = [
  {
    id: "sdfshdfsd",
    name: "Rajnish Pandey",
    age: 22,
    address: "Bangalore",
  },
  {
    id: "cvvbcbewb",
    name: "Piyush Pandey",
    age: 22,
    address: "Ranchi",
  },
  {
    id: "cvvbcbiiuewb",
    name: "Vivek Pandey",
    age: 22,
    address: "Ranchi",
  },
];

// Add the create service and define all methods
server.addService(customersProto.CustomerService.service, {
  getAll: (call, callback) => {
    callback(null, { customers });
  },
  get: (call, callback) => {
    let customer = customers.find((n) => n.id == call.request.id);

    if (customer) {
      callback(null, customer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
  insert: (call, callback) => {
    let customer = call.request;

    customer.id = Math.random(); // uuidv4
    customers.push(customer);
    callback(null, customer);
  },
  update: (call, callback) => {
    let existingCustomer = customers.find((n) => n.id == call.request.id);

    if (existingCustomer) {
      existingCustomer.name = call.request.name;
      existingCustomer.age = call.request.age;
      existingCustomer.address = call.request.address;
      callback(null, existingCustomer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
  remove: (call, callback) => {
    let existingCustomerIndex = customers.findIndex(
      (n) => n.id == call.request.id
    );

    if (existingCustomerIndex != -1) {
      customers.splice(existingCustomerIndex, 1);
      callback(null, {});
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

server.bindAsync(
  "127.0.0.1:30043",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(`Error starting gRPC server: ${err}`);
    } else {
      server.start();
      console.log(`gRPC server is listening on ${port}`);
    }
  }
);
