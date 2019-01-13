# Hector's Monorepo
Start testing with the concept of a single repository. 

##Why?
A monorepo allows for simple organization. You have all of the elements in one place. This makes it easier to put a project together and to manage dependencies. It also cuts down the number of dependencies used. For example, let's say that two elements of the overall solution use the same node module. Why does it need to exist in two places if it is exactly the same dependency. 

Furthermore, when something in the repository changes you can avoid the tedious manual coordination of integration testing. You can just refactor an API and all of its calles in one commit. 
