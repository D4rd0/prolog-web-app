# Redux documentation

Redux is a tool that helps organize and share information in web applications, making it easier to manage data between different parts of the application. This improves the clarity, the way we manage the state of the application and and reduce the load of api calls.

## Getting started

To import all the needed dependencies type:

> npm i

before launching the project and all the dependencies will be installed.

## How it works in BlueCar

In the BlueCar project we use redux to manage the global state (that is to say, how it looks at an exact time) of the application. In our case we use it to store:

- **All user data**
- **Published trips of the authenticated user**
- **Reserved trips by the authenticated user**

**_WIP: More states waiting to be added_**

## Usage

To store new information in our project you'll typically follow these steps:

## 1. Create reducers

Reducers are functions that specify how the application's state changes in response to actions.

Reducers offer an organized way to deal with state changes. They contain the logic for handling the state, making the code more structured and easy to maintain. Some advantages of using reducers are the **maintainability** (_reducers centralize the logic for state modifications, making it easier to track and update as the application grows_) and **readability** (_By isolating different state-related operations, reducers contribute to more readable and comprehensible code_)

Some example of some reducers of the application are:

- [User reducer](src/storage/reducers/user)

- [PublishedTrips reducer](src/storage/reducers/publishedTrips)

As we can see, the reducer has 3 parts:

- **Interface**: This is where we define what our dataset should look like (we call it "interface"). It can be something generic like _user_ or something more specific depending on what we need.

- **Initial state**: This represents the initial state of the reducer. It defines the initial structure and values for the state managed by the reducer.

- **Actions**: In the actions section, we set up the rules and operations for our dataset. First, we assign a name to these rules. Then, we specify how our dataset should look like from the beginning. Finally, we create the actions, which are like the moves that can change our dataset. Redux provides us with two things to do this:

  - **State**: It is like the current state of our application, that is to say, how it looks at a given moment.

  - **Payload**: Is a new value that we want to add, remove or change in our dataset. The payload is crucial as it carries the specific data required to execute actions accurately. It's like the set of instructions telling the system what exactly needs to change in the dataset.

## 2. Store configuration

The store is where the state of the application is stored. It is configured in the directory:

- [Store](src/storage/store)

  The store is composed of:

  - **State Persistence**: redux-persist is used to configure state persistence. A configuration object (persistConfig) is used to specify how and where persistent state will be stored in a Redux application, with a unique key identifying the state in local storage and storage details defined (in this case, redux-persist/lib/storage).

  - **Combination of Reducers**: All individual reducers are combined into a single reducer using Redux combineReducers.

  - **Custom Middleware**: Custom middleware is used to handle specific redux-persist actions and avoid errors related to state serialization.

  - **Store configuration**: configureStore from @reduxjs/toolkit is used to configure the store. The reducer combined with persistence is passed as an argument, and custom middleware is applied.

  - **Persistor**: A persistor is created using persistStore to manage state persistence.

## 3. useAppSelector

The **useAppSelector** hook is useful for selecting specific data from the global state of the Redux application and using it in our React components. Instead of **useSelector**, we opt for **useAppSelector** to take advantage of our project-specific typing.

First of all import **import useAppSelector**

> import { useAppSelector } from 'src/storage/hooks/hooks';

Then an example of usage with publishedTrips:

> const { publishedTrips } = useAppSelector((state: any) => state.publishedTrips);

As we can see we access the publishedTrips first with the state.

## 4. useAppDispatch

The **useAppDispatch** hook simplifies the task of sending actions to the Redux store from our React components. Compared to **useDispatch**, **useAppDispatch** is specifically typed for our project, which improves code safety and clarity.

First of all import **import useAppDispatch**

> import { useAppDispatch } from 'src/storage/hooks/hooks';

Then we declare the constant

> const dispatch = useAppDispatch();

And to use actions of the reducer we have to import it. In the example below is used updateReserved action. We call the action inside the dispatch, and in our case we pass a trip to update the list of reserved trips. Depending on the type of action we will have to pass an object, a list...

> dispatch(updateReserved(tripSelected));
