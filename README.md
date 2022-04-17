Additional fixes and hacks to avoid TypeScript 
compilation warnings for Meteor.

## Updating to v2

Fixed types v2 have the most of Template extensions 
removed. Current implementation of @types/meteor
provides all the necessary typings.

StrictDict<T> is now a type synonym for ReactiveDict<T>
for a backward compatibility.