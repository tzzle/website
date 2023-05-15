function appear() {
    document.getElementById('disappear').style.display = 'block';
    document.getElementById('remove').style.display = 'none';
    document.getElementById('content').style.display = 'none';
}

function disappear() {
    document.getElementById('disappear').style.display = 'none';
    document.getElementById('remove').style.display = 'flex';
    document.getElementById('content').style.display = 'block';
}

function courseAction() {
    document.getElementById('courseActionButton').style.display = 'none'
    document.getElementById('courseActionButtonDown').style.display = 'flex';
    document.getElementById('course-vid1').style.display = 'flex';
    document.getElementById('course-vid2').style.display = 'flex';
}

function courseActionClose() {
    document.getElementById('courseActionButtonDown').style.display ='none';
    document.getElementById('courseActionButton').style.display = 'flex';
    document.getElementById('course-vid1').style.display = 'none';
    document.getElementById('course-vid2').style.display = 'none';
}

function down() {
    document.getElementById('pre_f_s_b_more').style.display = 'none';
    document.getElementById('c_f_i').style.display = 'block';
    document.getElementById('pref_s_b_less').style.display = 'flex';
}

function up() {
    document.getElementById('pre_f_s_b_more').style.display = 'flex';
    document.getElementById('c_f_i').style.display = 'none';
    document.getElementById('pref_s_b_less').style.display = 'none';
}

function downOne() {
    document.getElementById('d1-buttonOne').style.display = 'none';
    document.getElementById('c_s_i').style.display = 'block';
    document.getElementById('pref-f-s-b-lessTwo').style.display = 'flex';
}

function upOne() {
    document.getElementById('d1-buttonOne').style.display = 'flex';
    document.getElementById('c_s_i').style.display = 'none';
    document.getElementById('pref-f-s-b-lessTwo').style.display = 'none';
}
