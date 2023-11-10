const course={
    courseName:"Web Development",
    coursePrice:230,
    courseInstructor:"Akhil Biswal"
}
// this is the new way of writing values

const {courseInstructor:teacher}=course
//object destructure
console.log(teacher);