<template>
  <div id="app-header">
    <header>
        <nav class="header-nav">
            <a href="#" class="header-logo"><span>YOU</span><br><span>CLEVE</span></a>
            <div class="search">
                <a href="#" class="search-btn">
                    <img class="search-icon" src="../assets/img/icons/search.png" alt="search-icon">
                </a>
            </div>
            <div class="log-in">
                <router-link  class="log-in-btn" to="/signin">Войти</router-link>
            </div>
        </nav>
        
    </header>
    <div class="all-courses">
        <ul>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Подборки</a></li>
            <li><a href="#">Детям</a></li>
            <li><a href="#">Подписки</a></li>
        </ul>
        
    </div> 
    <transition name="fade">
        <div id="shadow" v-show="show" v-on:click="show=!show"></div>
    </transition>
    <transition name="fade">
        <div class="dws-wrapper" id="sign-up" v-show="show">
            
            <div class="dws-form" >
                <div class="close">
                    <div class="close-btn fa fa-close" v-on:click="show=!show"></div>
                </div>
                <div class="label-form">
                    <label class="tab active" title="Вкладка 1">Авторизация</label>
                    <label class="tab" title="Вкладка 2">Регистрация</label>
                </div>
                <form class="tab-form active ">
                    <div class="box-input">
                        <label class="labelText">Введите E-mail</label>
                        <input class="input" type="email" required>
                    </div>
                    <div class="box-input ">
                        <label class="labelText">Введите пароль</label>
                        <input class="input" type="password" required>
                    </div>
                    <a href="#" class="button">Войти</a>
                    <ul class="social">
                        <li><a href="#"><div><i class="fa fa-facebook"></i></div></a></li>
                        <li><a href="#"><div><i class="fa fa-twitter"></i></div></a></li>
                        <li><a href="#"><div><i class="fa fa-instagram"></i></div></a></li>
                        <li><a href="#"><div><i class="fa fa-vk"></i></div></a></li>
                        <li><a href="#"><div><i class="fa fa-youtube"></i></div></a></li>
                    </ul>
                    <a href="#">Я забыл свой E-mail или пароль</a>
                </form>
                <form class="tab-form">
                    <div class="box-input">
                        <label class="labelText">Введите E-mail адрес</label>
                        <input class="input" type="email" required>
                    </div>
                    <div class="box-input">
                        <label class="labelText">Введите свое имя</label>
                        <input class="input" type="text" required> 
                    </div>
                    <div class="box-input">
                        <label class="labelText">Введите пароль</label>
                        <input class="input" type="password" required>
                    </div>
                    <div class="who">
                        <div class="recover">
                            <input type="checkbox" id="client">
                            <label for="client">Я зритель</label>
                        </div>
                        <div class="recover">
                            <input type="checkbox" id="contentm">
                            <label for="contentm">Я веду курсы</label>
                        </div>
                    </div>
                    <a href="#" class="button">Регистрация</a>
                
                    <div class="recover">
                        <input type="checkbox" id="ckbox">
                        <label for="ckbox">Ознакомлен(-а) и принимаю <a href="#">условия регистрации</a></label>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</div>    
</template>

<script>
export default {
  name: 'Header',
  data(){
      return{
          show:false
      }
  }
}
</script>

