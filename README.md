# Getting Started with Job list project

1. Clone the project `git clone git@github.com:Banzaci/jobb-list.git`

2. In the project directory, you can run to install all packages:

### `yarn`

3. Once installed, you can run

### `yarn start`

4. Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

I decided to use [Tailwind](https://tailwindcss.com) as the CSS library, [Fontawesome](https://fontawesome.com) as icon library and [React router 6.4](https://reactrouter.com/en/main). The reasons why I decided to use these libraries are that they are well used and tested.


## UX

The page is responsive and I decided to add each job ad in a "box", with a border around it, and with space between the boxes. It gives a clean design. A hower effect to highligt the box you are watching (to make it easier to read). I also decided to add two blocks where the user can toggle to read more about the job description, and skills the company is looking for without leaving the page.

Also, the two external links have the same styling where as the two internal links (Who you are and Job description) have the same styling. This will make it clearer for the user what is external and internal.


## JS

I decided to split the code into resusable components, since this could be a project which could grow to a much larger web application in the future. I also added an Error component, just in case the url is not working. There is also a navigation which contain a header with a title.