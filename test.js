export const adminPaths2=[
    {
        name:"Dashboaed",
        path:'dashboard',
        element:"AdminDashboard"
    },
    {
        name:"User Management",
        children:[
            {
                name:"Create Student",
                path: "create-student",
                element: "Student",
              },
              {
                name:"Create Admin",
                path: "create-admin",
                element: "Admin",
              },
              {
                name:"Create Faculty",
                path: "create-faculty",
                element:"Faculty",
              },
        ]
    }

]
// const adminPaths2=[2,5,3,6,7]
const adminRoute=adminPaths2.reduce((acc,item)=>{
//   acc.push(item)
if (item.path && item.element) {
    acc.push({
        path:item.path,
        element:item.element
    })
}
if (item.children) {
    item.children.forEach(item=>{
        acc.push({
            path:item.path,
            element:item.element
        })
    })
}
 return acc;
},[])

console.log(adminRoute);