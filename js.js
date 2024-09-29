function handleSubmit() {
    // Lấy giá trị của input email và chuyển sang in thường
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();
  
    // Lấy element của thẻ p có hiển thị lỗi và thông báo yêu cầu nhập email
    const errorEmail = document.getElementById('error-email');
    const promptMessage = document.getElementById('prompt-message');
    
    // Điều kiện để là một email
    const checkMail = 
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
    // Dùng match để kiểm tra với email vừa nhập
    const check = emailValue.match(checkMail);
    
    // Lấy phần chứa thông tin user
    const sectionContent = document.querySelector('#personal-info .section-content');
    const submitControl = document.querySelector('.submit-email');
  
    // Ẩn prompt message sau khi người dùng nhấn submit
    promptMessage.style.display = 'none';
  
    if(check) {
        sectionContent.style.display = 'block';  // Hiển thị nội dung thông tin cá nhân
        submitControl.style.display = 'none';    // Ẩn form submit
        errorEmail.innerHTML = '';
    } else {
        errorEmail.innerHTML = 'Vui lòng nhập đúng định dạng email';
    }
}  

// function handleOnMouseOver(element){
//     const viewMore= element.querySelector('.view-more');
//     viewMore.style.display = 'inline-block';
// }

// function handleOnMouseOut(element){
//     const viewMore = element.querySelector('.view-more');
//     viewMore.style.display = 'none';
// }

// function handleViewMore(element){
//     const parentElement = element.closest('.parent');
//     const viewMore = element.querySelector('.view-more');
//     const lessMore = element.querySelector('.less-more');
//     viewMore.style.display = 'none';
//     lessMore.style.display = 'block';
//     const jobContent = parentElement.querySelectorAll('.job-content');
//     jobContent.forEach((element) => {
//         element.style.display = 'block';
//     });
// }

function handleOnMouseOver(element) {
    const viewMore = element.querySelector('.view-more');
    const lessMore = element.querySelector('.less-more');

    // Chỉ hiển thị nút View more khi nút Less more không hiển thị
    if (lessMore.style.display === 'none') {
        viewMore.style.display = 'inline-block';
    }
}

function handleOnMouseOut(element) {
    const viewMore = element.querySelector('.view-more');
    const lessMore = element.querySelector('.less-more');

    // Ẩn nút View more khi chuột rời khỏi, nếu nút Less more chưa hiển thị
    if (lessMore.style.display === 'none') {
        viewMore.style.display = 'none';
    }
}

function handleViewMore(element) {
    const parentElement = element.closest('.parent');
    const jobContent = parentElement.querySelector('.job-content');
    const viewMore = parentElement.querySelector('.view-more');
    const lessMore = parentElement.querySelector('.less-more');

    // Hiển thị nội dung công việc và nút Less more, ẩn nút View more
    jobContent.style.display = 'block';
    viewMore.style.display = 'none';
    lessMore.style.display = 'inline-block';
}

function handleLessMore(element) {
    const parentElement = element.closest('.parent');
    const jobContent = parentElement.querySelector('.job-content');
    const viewMore = parentElement.querySelector('.view-more');
    const lessMore = parentElement.querySelector('.less-more');

    // Ẩn nội dung công việc và nút Less more, nhưng nút View more không hiển thị lại ngay lập tức
    jobContent.style.display = 'none';
    lessMore.style.display = 'none';
    viewMore.style.display = 'none';
}



