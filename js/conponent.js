const conponent = {};
conponent.registerPage = ` 
<form action="" id="registerForm">
<div class="cha">
    <div>
        <div class="father"> <div class="logo">
        <a href="wed.html">
          <img
            style="width: 200px; padding: 10px 10px"
            src="https://animehay.club/themes/img/logo.png"
            alt="logo animehay"
          />
        </a>
      </div>
    <h3 > Đăng Ký </h3>
    
    <div >
        <i  class="fa-solid fa-user"></i>
        <input name="username" style="padding-left: 15px;margin-bottom:5px" id="tk" type="text" placeholder="Tên tài khoản" ><br>
        <span  style="color:red" id="spantk"><em><h4></h4></em></span>  
    </div> 
    <div >
        <i  style="cursor:pointer ;" class="fa-solid fa-envelope"></i>
        <input name="email" style="padding-left: 15px;margin-bottom:5px" id="email"  type="text" placeholder="email..."><br>
        <span  style="color:red" id="spanemail"><em><h4></h4></em></span>
    </div>
    <div >
        <i  style="cursor:pointer ;" id="icon" onclick="showPassword()" class="fa-solid fa-eye"></i>     
        <input name="password" style="padding-left: 15px;margin-bottom:12px" id="mk" type="password" placeholder="mật khẩu"><br>
        <span  style="color:red"  id="spanmk"></span>
        </div>
      <div >
        <i  style="cursor:pointer ;" id="iconClose" onclick="showConfirmPassword()" class="fa-solid fa-eye"></i>
        <input name="confirmPassword" style="padding-left: 15px;margin-bottom:12px"  id="remk" type="password" placeholder="xác nhận mật khẩu"><br>
       <span  style="color:red" id="spanremk"></span> 
       </div> 
    
   
       
    
    <div id="btnsuccess"> 
        <button type="submit" id="success" onclick="register()" style="cursor:pointer ;width : 150px;height: 40px;border-radius: 30px;margin-top: 40px;" > <h5>Tạo tài khoản</h5> </button>
        <p style="margin-bottom:0" >or</p>
        <button id="redirectLogin" style="width: 100px;height: 30px;border-radius: 30px;cursor: pointer;">Đăng nhập</button>
    </div>
   
</div>
</div> 
</form>

`
conponent.loginPage = ` 

<div id="registerForm">
<form action="" id="loginForm" >
<div class="cha">
    <div>
        <div class="father"> <div class="logo">
        <a href="wed.html">
          <img
            style="width: 200px; padding: 10px 10px"
            src="https://animehay.club/themes/img/logo.png"
            alt="logo animehay"
          />
        </a>
      </div>
    <h3 > Đăng nhập </h3>

    <div >
        <i  style="cursor:pointer ;" class="fa-solid fa-envelope"></i>
        <input name="email" style="padding-left: 15px;margin-bottom:5px" id="email"  type="text" placeholder="email..."><br>
        <span  id="spanemail" style="color:red"><em><h4></h4></em></span>
    </div>
    <div >
        <i  style="cursor:pointer ;" id="icon" onclick="showPassword()" class="fa-solid fa-eye"></i>     
        <input name="password" style="padding-left: 15px;margin-bottom:12px" id="mk" type="password" placeholder="mật khẩu"><br>
        <span  style="color:red"  id="spanmk"></span>
        </div>
    
    <div id="btnsuccess"> 
        <button type="submit" id="success" onclick="register()" style="cursor:pointer ;width : 150px;height: 40px;border-radius: 30px;margin-top: 40px;" > <h5>Đăng nhập</h5> </button>
        <p style="margin-bottom:0" >or</p>
        <button id="outregister" style="width: 100px;height: 30px;border-radius: 30px;cursor: pointer;">Đăng ký</button>
    </div>
   
</div>
</div> 
</form>
</div>

`
conponent.wellcomePage = `
<div id="table" style="display:none">

<div id="title" style="display:flex;justify-content: space-between;"> <div style="margin-left:140px"> JS09-chatPage </div> <i onclick="btnChat2()" style="font-size: 20px;cursor: pointer;" class="fa-sharp fa-solid fa-xmark"></i></div>

<div id="spaceChat" class="list-content">

 


</div>
<div style="display:flex ;" id="valueInputForm">
    <span><i class="fa-solid fa-circle-plus"></i></span>
    <span><i class="fa-regular fa-image"></i></span>

    <span><i class="fa-solid fa-face-smile"></i></span>
    <input onclick="tranform()"  id="infoInput" name="valueInput" type="text" placeholder="Nhập tin nhắn">
    
    <span onclick="btnChat1()" style="display:"  id="btnSend" class="btnSend" type="submit"   ><i class="fa-solid fa-circle-chevron-right"></i></span>
</div>
</div>
<span onclick="btnChat()" style="display:" id="btnChat"><i class="fa-brands fa-facebook-messenger"></i></span>

<span onclick="btnChat2()" style="display:none" id="btnChat2"><i class="fa-brands fa-facebook-messenger"></i></span>



<div id="ifDontLogin" style="display:none;color: lightblue;" >
      <h1 style="color: red;background-color: lightblue;" >BẠN CHƯA ĐĂNG NHẬP !!!</h1>
  </div>
    
    <div id="divMid">
      <div id="header">
        <div class="logo">
          <a href="wed.html">
            <img
              style="width: 200px; padding: 10px 10px"
              src="https://animehay.club/themes/img/logo.png"
              alt="logo animehay"
            />
          </a>
        </div>
        <input id="inputSearch" oninput="search()"
          style="
            margin: 12px 30px;
            width: 50%;
            height: 33px;
            background-color: #000;
            border-style: none;
            color: white;
            border: 1px solid #404040;
            outline: none;
            
            padding-left: 20px;
            padding-top: 17px;
            padding-bottom: 17px;
          "
          type="text"
          placeholder="Nhập từ khóa... "
        /><i id="kinhnup" class="fa-solid fa-magnifying-glass"></i>
        <div
          id="spanheader"
          style="display: inline-flex; height: 45px; padding-top: 7px"
        >
        <span  id="menu" style="display: none ;" >
          <div >
            <h4 style="background-color:#9c3737;text-align: center;">Thể Loại</h4>
            <ul data-tooltip="okcc">
             <li onclick="li1()">Anime</li>
             <li onclick="li2()">Bí ẩn</li>
             <li>Võ thuật</li>
             <li>Shounen</li>
             <li>Âm nhạc</li>
             <li>Seinen</li>
             
            </ul>
           </div>
          
        </span>
          <a
            style="text-decoration: none"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            
            > <span id="listMenu" style="display: inline-block;" onclick="theLoai()"><i  onclick="theLoai()" class="fa-solid fa-bars"></i></span>
              <span id="listMenu1" style="display: none;margin: 0px;"  onclick="theLoai1()" ><i   style="color:#9c3737 ;"  onclick="theLoai1()" class="fa-regular fa-circle-xmark"></i></span>
        </a>

          <a
            style="text-decoration: none"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Phim yêu thích"
            ><span onclick="phimyeuthich()" style="display: inline-block;"><i onclick="phimyeuthich()" class="fa-regular fa-bookmark"></i></span
          ></a>
          <a 
            style="text-decoration: none"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-original-title=""
            ><span id="listuser" style="display: inline-block;" onclick="user()"><i onclick="user()" class="fa-regular fa-user"></i></span>
            <span id="listuser1"  style="display: none;" onclick="user1()"> <i  class="fa-regular fa-user"></i></span>
            </a>
            <a
            style="text-decoration: none"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            
            > <span id="listMenu" style="display: inline-block;" onclick="admin()"><i onclick="admin()" class="fa-sharp fa-solid fa-user-secret"></i></span>
              
        </a>
            <div id="actionUser" style="display: none;">
             
              <ul>
                <li style="display:block ;" id="tendn"></li>
                <li style="display:none ;" id="tendn1" onclick="login()" >Đăng nhập</li>
                <li style="display:none ;" id="tendn2" onclick="sign()" >Đăng ký</li>
                <li style="display:block ;" id="tendn3" onclick="logout()">Đăng xuất</li>
                
              </ul>
            
            </div>
         
        </div>
      </div>
  
      <div style="display:block ;" id="phimhot" class="margin-10-0 bg-gray-2">
        <div class="fs-17 fw-700 padding-0-20 color-gray inline-flex height-40 flex-hozi-center bg-black border-l-t">
      Phim đang hot
        </div>
        </div>
        <hr>
                                               <!-- lớp giả từ đây -->
      <div id="bodyFake" style="display: block ;">

      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
        style="display:block ;"
      >
      
        <div class="carousel-inner" >
          <div class="carousel-item" data-bs-interval="2500">
            <img
             onclick= "onePiece()"
              style="height: 400px; width: 100%"
              src="./image/hvah5.jpg"
              alt=""
            />
          </div>
          <div class="carousel-item" data-bs-interval="2500">
            <img onclick= "dragon()"
              style="height: 400px; width: 100%"
              src="./image/slide4.jpg"
              alt=""
            />
          </div>
          <div class="carousel-item" data-bs-interval="2500">
            <img onclick= "naruto()"
              style="height: 400px; width: 100%"
              src="./image/naruto1.jpg"
              alt=""
            />
          </div>
          <div class="carousel-item active" data-bs-interval="2500">
            <img onclick= "onePiece()"
              style="height: 400px; width: 100%"
              src="./image2/bua3.jpg"
              alt=""
            />
          </div>
          <div class="carousel-item" data-bs-interval="2500">
            <img onclick= "hocVien()"
              style="height: 400px; width: 100%"
              src="./image/slide7.jpg"
              alt=""
            />
          </div>
        </div>
        <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden"
          ><font style="vertical-align: inherit"
            ><font style="vertical-align: inherit">Trước</font></font
          ></span
        >
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"
          ><font style="vertical-align: inherit"
            ><font style="vertical-align: inherit">Tiếp theo</font></font
          ></span
        >
      </button>
    </div>
    <br />
    <div class="margin-10-0 bg-gray-2">
        <div class="fs-17 fw-700 padding-0-20 color-gray inline-flex height-40 flex-hozi-center bg-black border-l-t">
        Phim đề cử
        </div>
        </div>

<div  id="footer" >
<div id="takeCare">
  <h6>CHĂM SÓC KHÁNH HÀNG</h6>
  <ul style="padding-left:0 ;">
  <li><a href="">Trung tâm trợi giúp</li>
  <li><a href="">Thanh toán</a></li>
  <li><a href="">Tuyển nhân viên nữ</a></li>
  <li><a href="">Chăm sóc khánh hàng</a></li>
  <li><a href="">Chính sánh bảo mật</a></li>
  

</ul></div>
<div id="aboutWed">
  <h6>THÔNG TIN VÊ WED</h6>
  <ul style="padding-left:0 ;">
  <li><a href="">Công ty một thành viên</li>
  <li><a href="">Founder: Lê Đức</a></li>
  <li><a href="">CEO: Lê Đức</a></li>
  <li><a href="">Manager: Lê Đức</a></li>
  <li><a href="">Staff: Lê Đức</a></li>
  </ul>
</div>
<div id="followUs">
  <h6>THEO DÕ CHÚNG TÔI TRÊN</h6>
  <ul>
    <li><i style="color:#3f71e7 ;" class="fa-brands fa-square-facebook"></i> <a href=""> Lê Văn Đức</a> </li>
    <li><i style="color:#dc6100" class="fa-brands fa-square-instagram"></i><a href=""> Lê Văn Đức</a></li>
    <li><i class="fa-brands fa-linkedin"></i><a href=""> Lê Văn Đức</a></li>
  </ul>
</div>
<div id="appMobile">
  <h6>TẢI APP ANIMEHAY NGAY THÔI</h6>
  <img src="./image/qr.png" alt="">
</div>
</div>

`