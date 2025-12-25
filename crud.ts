import { prisma } from "./lib/prisma";



async function run() {
    // const createUser = await prisma.user.create({
    //     data:{
    //         name: "Jankhar2223",
    //         email:"Jankhar@gmail.com"
    //     }
    // })
    // console.log("Created user: ", createUser);


    // post method:
    // const createPost = await prisma.post.create({
    //     data:{
    //         title:"This is title",
    //         content:" Big content",
    //         authorId: 1
    //     }
    // })
    // console.log("Created Post :",createPost);




    // Create Profile

//     const createProfile = await prisma.profile.create({
//         data: {
//             bio: "Sr. Software Engg..",

//             userId: 2
//         }

//     })
// console.log("CreatedProfile:   ",createProfile);


// Read operation:
// const users = await prisma.user.findMany()
// let users = await prisma.user.findMany()




// if all showed:
let users = await prisma.user.findMany({
    // include:{
    //     posts: true,
    //     profile: true
    // }

    select: {
        id: true,
        name: true,
        email:true,

        posts: true,
        profile: true
    }
})
// // console.log(users);

// // if div more div:
console.dir(users, {depth: Infinity});



// Update Operation:



const updateUser = await prisma.user.update({
  where: {
    email: 'sk@gmail.com',
  },
  data: {
    name: 'Viola the Magnificent',
  },
})

console.log("UpdateUser",updateUser);

//     name: 'Md_Al_Mostafa Orginal',
//     email: 'sk@gmail.com',
//     posts: [
//       {
//         id: 1,
//         title: 'This is title',
//         content: ' Big content',
//         isPublished: false,
//         createAt: 2025-12-25T17:54:50.664Z,
//         updateAt: 2025-12-25T17:54:50.664Z,
//         authorId: 1


// let updateProfile = await prisma.profile.update({
//         where: {
//             userId: 1  // Changed from 'userId' (correct)
//         },
//         data: {
//             bio: "Phitron Member",  // Changed from 'title' to 'bio'
//             dateOfBirth: "2025-12-25T17:54:50.664Z"
//         },
//     });

//     console.log("Updated Profile:", updateProfile);
}








run()