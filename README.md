# REST
To follow the story of REST, we need to know where it came from. Dr.(Roy Fielding)[https://en.wikipedia.org/wiki/Roy_Fielding] figured out a way to make an API that uses HTTP/HTTPS for all CRUD operations. </br>

## Fundamentals of REST 
It stands for REpresentational State Transfer. It is an Architectural Style, which means it has constraints and HTTP is the protocol associated with it. Let's talk about the constraints.
HTTP is itself a very simple : Request and Response format.</br>

### HTTP Request
```
GET /news/ HTTP/1.1
Host: example.org
Accept-Encoding: compress, gzip
User-Agent: python-httplib2 
```
</br>
This request is for a resource that is identified by a `URI` where Resource = `http://example.org/news` and the Method being `GET`</br>

### HTTP Methods

GET - Safe, Idempotent, Cacheable</br>
PUT - Idempotent(request can be done multiple times)</br>
DELETE - Idempotent</br>
HEAD - Safe, Idempotent </br>
POST</br>

### HTTP Response
```
HTTP/1.1 200 OK
Date: Tue, 29 Nov 2016 12:15:33 GMT
Server: Apache
ETag: "85a1b76524fvd3423fdv5ht64"
Content-Type: text/html
Cache-Control: max-age=3600 //shows how long a response can be cached.

<!DOCTYPE HTML>
....
```

## RESTful characteristics 
These are divided into : Resources and Protocols
URI - used to uniquely address resources.
Uniform Interface - All resources share a uniform interface for transfering the state between the client and the server consisting of constraints set by well defined operations (GET,PUT etc) , 
content-types and maybe support for code on demand (representations).

Protocols must be based on a client-server (HTTP) model, have to be stateless(each request is independent of the other), should be Cacheable and layered(intermediaries). 

You (User Agent) have a request/response relationship with the Origin Server but it is not a direct connection. You are going via different intermediaries (and I'm not talking about lower layer devices like routers and switches)
Intermediaries include proxies(chosen by client) and gateways(chosen by the origin server). Every intermediary may have a personal cache, so as soon as your request hits that listing, you're going to get your response.

## Benefits of REST 
So, why use rest at all? I mean sure, you have got some idempotence, some fast-cache based response times and looks a bit straightforward. The rabbit hole goes deeper, my friends.
As a Engineer, I can say that we lay a lot of emphasis on efficiency, scalability and percieved performance. 

1.Efficiency is presented as a by product of all the caching - if you have things locally cached, you don't even touch the network. 
2.Control data allows the signalling of compression so our response can be gzipped so that we save space.
3.Scalability, the flavour that is provided by gateways, that allow you to distribute traffic among a large set of origin servers based on headers (methods, uri, content-type etc). 
4.Caching helps by reducing the overall requests made. 
5.Statelessness allows the requests to be routed via different gateways and proxies so you don't have to deal with bottlenecks.
6.With reduced number of known media types, allowing browsers to handle known types faster. (eg, when HTML is partially rendered as it is being downloaded)
7.Code on demand allows computation to be moved closer to the client or server, wherever the work could be done faster. (like the time when javascript is looking for you to enter a decent permutation of charachters and numbers for a passowrd and wont' let you go forward)
8.Since GET is safe and re-usable, we can pre-fetch the data if we can figure out what the user is looking for. Yes, adbots, I am looking at you.

## Its all about structuring
Well, lets just say this. In the XML-RPC protocol, all the requests are POST, so they're not safe, nor are they idempotent.
All the calls go to the same URI so if you want to distribute many such calls among a group of origin servers, you're going to have to look inside the body of the method name. Does not scale, does not offer any intelligence to the intermediaries.

In protocols (like Atom Publishing Protocol) , you're using GET (safe, idempotnet, cacheble and zippable) to a document's URI. The response type is in the header(content-type), so don't need to go looking into the body.
Body itself is HTML, so rendering is easy for browser. All the other methods(PUT,DELETE etc) can be addressed to URI's.
##To start your MongoDB 
mongod --storageEngine=mmapv1 --dbpath [your-path] (to start the mongodb server)


### Let's start building some simple stuff

## NodeJS App Construction

`npm init` -  just gives you an amazingly simple way to create the package.json for your app.</br>

Install Dependencies.</br> 
Most often you will mention your Dependencies within your `package.json` but here I'm just going to go ahead and install `express` globally. </br>
`npm install express --save`

## Set Up Server.js 
You're going to run this file to start your server. Refere to the file outlined in the source. 

# DOCKERSTUFF
```
sudo docker-compose -f docker-compose.yml down || true
docker build -t shreyasgune/nodeserver .
docker-compose -f docker-compose.yml up

```


