//student info
const quote = document.getElementById('quote');
const name = document.getElementById('name');
const job = document.getElementById('job');
const profilePhoto = document.getElementById('profilePhoto');

const allStudents = [
    {
        name: 'Tanya Sinclair',
        quote: '“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”',
        job: 'UX Engineer',
        profilePhoto: './images/image-tanya.jpg',
    },
    {
        name: 'John Tarkpor',
        quote: '“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”',
        job: 'Junior Front-end Developer',
        profilePhoto: './images/image-john.jpg',
    },
];

function whichStudent(num){
    const student = allStudents[num];
    profilePhoto.src = student.profilePhoto;
    name.textContent = student.name;
    job.textContent = student.job;
    quote.textContent = student.quote;
};

//toggle icons
let count = 0;
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = allStudents.length - 1;
    }
    whichStudent(count)
})

next.addEventListener('click', () => {
    count++;
    if (count >= allStudents.length) {
        count = 0;
    }
    whichStudent(count)
})