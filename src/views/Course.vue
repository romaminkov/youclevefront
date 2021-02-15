<template>
    <div id="app-video">
    <div class="course-present">
        <div class="course-title">
            <div class="course-name">
                <h4>Название курса</h4>
            </div>
            <div class="course-author">
                <div class="name-author">
                    <a href="#">Академия ШАГ</a>
                </div>
                <div class="follow-author fa fa-circle">
                    <button class="follow-author-btn" 
                     v-on:click="sub=!sub, isActivePlus=!isActivePlus">
                    <span>{{ subText }}</span>
                    </button>
                </div>
                <div class="raiting">
                    <span class="star fa fa-star"></span>
                    <span class="sr-raiting">4.8</span>
                </div>
                
            </div>
        </div>
        <div class="video-row">
            <div class="video">
                <img src="img/p3.jpg" alt="video-img">
            </div>
            <div class="playlist">
                <div class="summary-time">
                    n Уроков(hh:mm:ss)
                </div>
                <div class="video-list">
                    <ol>
                        <li class="video-item ">
                            <div class="video-info fa fa-lock">
                                <span class="info">Название видео</span>
                            </div>
                            <span class="duration">hh:mm:ss</span>
                        </li>
                        <li class="video-item ">
                            <div class="video-info fa fa-lock">
                                <span class="info">Название видео</span>
                            </div>
                            <span class="duration">hh:mm:ss</span>
                        </li>
                        <li class="video-item ">
                            <div class="video-info fa fa-lock">
                                <span class="info">Название видео</span>
                            </div>
                            <span class="duration">hh:mm:ss</span>
                        </li>
                        <li class="video-item ">
                            <div class="video-info fa fa-lock">
                                <span class="info">Название видео</span>
                            </div>
                            <span class="duration">hh:mm:ss</span>
                        </li>
                        <li class="video-item ">
                            <div class="video-info fa fa-lock">
                                <span class="info">Название видео</span>
                            </div>
                            <span class="duration">hh:mm:ss</span>
                        </li>
                        <li class="video-item ">
                            <div class="video-info fa fa-lock">
                                <span class="info">Название видео</span>
                            </div>
                            <span class="duration">hh:mm:ss</span>
                        </li>
                        <li class="video-item ">
                            <div class="video-info fa fa-lock">
                                <span class="info">Название видео</span>
                            </div>
                            <span class="duration">hh:mm:ss</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="views fa fa-eye">
            <div class="v-counter">nnnn</div>
            <span>Просмотр(ов)</span>
        </div>
        <div class="useful-btns">
            <div class="save-btn">
                <button v-bind:class="{'fa-bookmark': isActiveSave, 'fa-check-square-o':isActiveDontSave}" 
                v-on:click="save=!save, isActiveDontSave=!isActiveDontSave" class="fa">{{ saveText }}</button>
            </div>
            <div class="recomend-btn" >
                <button class="fa fa-thumbs-o-up" v-show="likeShow" 
                v-on:click="stars=true, likeShow=false">{{ likeText }}
                </button>
                <div class="rating-area" v-show="stars">
                    <input type="radio" id="star-5" name="rating" value="5">
                    <label v-on:click="stars=false, likeShow=true, like=true" for="star-5" title="Оценка «5»"></label>	
                    <input type="radio" id="star-4" name="rating" value="4">
                    <label v-on:click="stars=false, likeShow=true, like=true" for="star-4" title="Оценка «4»"></label>    
                    <input type="radio" id="star-3" name="rating" value="3">
                    <label v-on:click="stars=false, likeShow=true, like=true" for="star-3" title="Оценка «3»"></label>  
                    <input type="radio" id="star-2" name="rating" value="2">
                    <label v-on:click="stars=false, likeShow=true, like=true" for="star-2" title="Оценка «2»"></label>    
                    <input type="radio" id="star-1" name="rating" value="1">
                    <label v-on:click="stars=false, likeShow=true, like=true" for="star-1" title="Оценка «1»"></label>
                </div>
                
            </div>
            
        </div>
    </div>

    <!--VIDEO PRESENTATION END-->

    <!--ABOUT VIDEO START-->

    <div class="course-info-wrapper">
        <div class="course-info">
            <div class="chose-about">
                <button class="info-btn" v-on:click="showDisc=true, showDop=false, showCom=false, showAut=false">Описание</button>
            </div>
            <div class="resources">
                <button class="info-btn" v-on:click="showDop=true, showDisc=false, showCom=false, showAut=false">Дополнительные материалы</button>
            </div>
            <div class="comments">
                <button class="info-btn" v-on:click="showCom=true, showDisc=false, showDop=false, showAut=false">Комментарии</button>
            </div>
            
            
        </div>
       
    </div>
    
    <div class="text-about-wrapper">
        <div class="about" v-show="showDisc">
            <h1>Описание</h1>
            <div class="about-course">
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit reiciendis, omnis magni in facilis voluptatibus, facere labore quaerat, tempore rem corrupti nulla minima! Asperiores expedita nulla voluptatem soluta praesentium?
                    Tempore facere sint ullam nam suscipit corporis ipsum rem, impedit a. Molestiae impedit atque obcaecati rerum aspernatur, asperiores doloribus ipsum cum assumenda omnis ipsa, ab libero molestias. Pariatur, minima dicta.
                    Numquam maxime accusantium quasi dignissimos illum recusandae alias ratione dolore, labore quam veritatis repellendus eaque sequi molestias ipsam distinctio nesciunt explicabo, id rem iusto. Quas harum esse praesentium beatae perferendis.
                    At unde voluptatibus, autem vel harum ullam id doloribus odio quidem officia dolore laboriosam, soluta fuga repellendus, aspernatur nihil? Quae placeat quia est nihil quo ducimus aliquid sequi impedit itaque!
                    Eius explicabo consectetur nisi distinctio, ratione quibusdam tempore unde assumenda ab facere dicta quaerat ipsam commodi quod mollitia iusto doloremque repellat? At labore ipsam consectetur nisi magnam similique alias id.
                    Dolores, repellendus optio magnam officiis accusantium molestiae, error sint aliquid assumenda debitis cum quas sequi repellat animi distinctio odit hic magni accusamus. Rerum totam non libero quod sit laboriosam neque!
                    Molestias consectetur sequi facilis obcaecati! Eum ratione quae vitae molestias facilis id repellendus earum totam dignissimos vel, ducimus velit consequatur pariatur mollitia itaque saepe dolorum fugiat suscipit amet, in inventore?
                    Vero repellat culpa autem nemo optio possimus placeat pariatur corrupti maiores, nulla dicta ab fuga. Explicabo quaerat ipsum nostrum sequi. Illum eos doloremque molestiae facere aperiam, quae officia ea corporis.
                    Fugiat aliquid ut, autem perspiciatis quibusdam laborum doloremque, iste reprehenderit velit expedita molestias voluptas nemo soluta qui obcaecati ad laudantium accusantium cumque quidem aut porro nisi eum distinctio. Labore, quia.
                    Cupiditate quam at eveniet labore, ipsum consequatur iure aperiam sunt deleniti neque error nemo magnam pariatur quisquam voluptate eius facere. Laboriosam, doloremque? Aspernatur harum aperiam, est culpa nam incidunt earum.
                    Reprehenderit odit et at dolorum veniam. Asperiores quisquam animi, laborum, commodi deserunt minus voluptate eveniet, molestiae laboriosam rem facilis! Obcaecati ipsam soluta nobis officia itaque ab ratione a cumque laudantium.
                    Et, ex nemo dignissimos atque quod quam earum tempora deleniti veniam! Libero, cum quo quia iste architecto quibusdam at minima, deleniti explicabo tempora nihil, veritatis eligendi voluptatum reprehenderit aliquid temporibus.
                    Officia accusamus ad voluptatem possimus quos ut, impedit enim distinctio quod quia quo esse laboriosam, at sint doloribus harum excepturi praesentium eius minima tenetur aspernatur! Eaque atque cum laborum tempora?
                    Officia quibusdam dolorum adipisci ad! Esse quam ipsam vitae praesentium veniam laudantium molestias eius tempora maiores, aspernatur sequi quidem deserunt accusamus, doloremque harum sit tenetur. Laborum minus dolore aliquam culpa.
                    Molestiae, iure animi. Veniam eligendi laboriosam distinctio sapiente, ad obcaecati nesciunt ut incidunt ex molestias totam libero quae corporis in autem illum nostrum ullam quos? Atque in necessitatibus inventore optio.
                    Iusto minus illum veniam doloribus! Ipsa porro deserunt consequatur eligendi fugiat corrupti aspernatur sunt, sapiente eius unde, ex libero alias voluptatum enim odit dolorum. Ea ex nemo iste cumque suscipit?
                    Velit deleniti non quasi aperiam. Hic dolores veniam et fugiat perspiciatis quod omnis eius, dolorem ipsa tenetur nesciunt, temporibus at quae quo quasi suscipit totam deserunt distinctio, nulla atque explicabo!
                    Dolorem est earum ut neque minima odio quibusdam vel laudantium ex? Deserunt fuga ut aliquid ab rem, hic quidem labore fugiat consequatur ipsa enim qui quo, totam praesentium, cupiditate repellat.
                    Consectetur quo illum doloremque recusandae. Iusto earum sed nobis fugiat quisquam vitae consequuntur consectetur, eius odio blanditiis molestiae, cupiditate veritatis nisi libero odit dolorum qui molestias, commodi debitis autem suscipit?
                    Veniam cumque sunt aut ullam. Quod voluptatem enim, explicabo rerum autem officiis quam, molestiae doloremque nam, aliquam iste adipisci! Soluta odio, a laudantium sunt impedit vero qui adipisci atque dolorem.
                    Dolores ratione excepturi exercitationem nisi, molestiae neque harum corporis suscipit eum minima deserunt enim porro voluptatibus beatae rem iste inventore. Accusamus totam assumenda, esse tempora natus nostrum animi fuga vel?
                    Libero sint dicta maiores voluptate molestias consectetur optio ea minus, illo rem soluta repellendus porro impedit reprehenderit ducimus, excepturi possimus, delectus error! Odit, minus velit commodi ratione iure inventore facilis?
                    Necessitatibus voluptatibus tempora inventore labore soluta facilis magnam ipsam neque odit quis placeat autem optio, consectetur hic nostrum praesentium, velit vero incidunt asperiores culpa quod! Sint sit ipsam esse accusamus.
                    Maiores est officia temporibus quo, architecto consequuntur animi nam porro sequi sint fugit dolores, at accusantium nemo ut corporis sapiente vitae necessitatibus sed esse culpa libero! Voluptatum, quas alias. Delectus.
                    Nobis impedit inventore voluptatem dignissimos itaque distinctio incidunt cum aperiam sapiente voluptate ullam quidem eos, est asperiores suscipit corrupti aliquid! Accusamus similique quos, tempore soluta vero modi ex error rerum?
                    Deleniti rerum eligendi assumenda rem? Facere corrupti, iusto ut laboriosam accusantium itaque recusandae minus, beatae nam nihil quibusdam distinctio non ratione quo odio quasi saepe. Delectus quasi corrupti soluta facere.
                    Quidem nisi aspernatur vero veritatis modi atque, maiores sit voluptates quod illo perspiciatis earum vitae iure voluptatum accusamus natus sed labore corporis sequi! Accusantium, soluta. At nisi excepturi numquam provident!
                    Nesciunt pariatur tempora explicabo quisquam, nemo voluptate, inventore facere consectetur officia tenetur est eligendi tempore dolorem ex, fugit nulla nihil expedita? Sint quaerat ipsum, est earum culpa animi optio repellat!
                    Nihil, ab veniam. Qui provident labore delectus possimus odio obcaecati accusantium, autem nisi maxime! Porro libero, excepturi esse earum reiciendis ipsa quo, nemo hic dolorum provident asperiores ipsam quia vitae.
                    Non delectus enim asperiores adipisci ut, nobis autem dicta exercitationem dolores nulla! Nisi, natus voluptates est sint, animi amet repellat facere officia qui eos dolores? Alias recusandae voluptatem omnis earum!
                    Tempore et repellendus voluptatibus fugiat explicabo. Minus optio delectus soluta odit ad ducimus exercitationem facere maxime beatae, similique modi saepe dicta distinctio nemo doloremque perspiciatis recusandae impedit totam. Eveniet, consectetur?
                    Neque officia quo mollitia molestias praesentium aut vero non dolorum, laboriosam, iure optio iste expedita, laudantium placeat veniam pariatur accusamus blanditiis. Quaerat illo ea unde veritatis dolores eaque, at quidem!
                    Voluptatem repellendus facere ab, minus voluptate voluptates quos velit hic placeat exercitationem adipisci tempore sint? Quisquam tempore odio quibusdam sequi ad repudiandae sint nesciunt eius voluptatum, voluptate, quas inventore earum?
                    Commodi expedita mollitia quod tempore nam facere, esse dignissimos architecto atque possimus quidem minus doloribus hic omnis velit quisquam ullam iusto dolorem labore laborum inventore! Velit itaque labore eaque dignissimos?
                    Repellat error labore velit, alias reiciendis illo porro saepe ratione magnam nulla omnis odio sit. Voluptatem beatae repudiandae iste corporis facere quia neque possimus? Ducimus sit ex libero ipsum rem.
                    Fugiat optio, commodi quaerat deleniti at, architecto repellendus error eveniet provident laudantium numquam vitae voluptate quasi dolorem, deserunt impedit veritatis odit ad porro aut repudiandae sint ipsam totam? Libero, nobis.
                    Dicta, doloribus repellendus adipisci consequatur laborum molestias autem aliquam voluptatum eius voluptatem a reiciendis eum neque molestiae maiores minima nam vitae recusandae, accusamus ab ratione, consequuntur omnis? Repudiandae, quidem reiciendis.
                    Ullam voluptas possimus consequatur voluptates mollitia eveniet assumenda, ex, omnis tempora expedita fugit cupiditate ipsa repellendus libero. Beatae praesentium velit dolores, voluptates, voluptatem, aspernatur et odio pariatur vitae quod facere?
                    Ad, cumque quos adipisci consequuntur expedita vitae sit pariatur praesentium nesciunt facilis molestias ex aliquid modi temporibus quisquam accusantium beatae. Distinctio sint impedit delectus officiis assumenda voluptates cupiditate, eaque a?
                    Fugiat mollitia ab cumque velit deleniti tenetur commodi dolorem necessitatibus dignissimos voluptate explicabo, sunt maiores? Assumenda quibusdam, laborum, soluta quasi dolore dicta voluptatum nesciunt reiciendis, repellendus architecto aperiam autem veniam.
                    Quos, ex officia laboriosam eveniet fugit itaque aperiam, recusandae omnis doloribus praesentium rerum facere asperiores porro voluptates nemo optio animi quo nam. Numquam ea aut voluptatem autem quo dolores veniam!
                    Quasi molestias vero provident aliquam, ut amet voluptates ipsa suscipit eos dicta totam nobis est voluptatem blanditiis vel neque perferendis adipisci quia esse dolore? Facere eos assumenda iusto sint ipsa?
                    Exercitationem quo asperiores molestiae blanditiis sit nulla ducimus doloremque. Suscipit tempora temporibus quis quaerat in, quam id fugit, incidunt nihil culpa fuga est deserunt sit. Perferendis voluptatibus distinctio quo quas?
                    Repellendus consectetur quaerat dolorum corrupti repellat deleniti eos neque non! Optio non qui, repudiandae ab esse sed. Eius, delectus inventore autem consectetur vero eaque quasi fuga repudiandae ratione, laborum soluta!
                    Ipsum, provident similique est doloremque vel ratione quaerat labore suscipit ex corporis, molestiae deleniti at, beatae dicta. Culpa minima excepturi quae dicta, corrupti voluptates adipisci dignissimos nisi explicabo at facilis!
                    Architecto nam fugit distinctio tempora modi, nesciunt voluptatum hic facilis ab a quisquam placeat est aut et repudiandae delectus ad consequatur debitis assumenda, voluptates eius facere! Minima, ipsa. Quas, ea.
                    Minima voluptate aspernatur, voluptates rerum in dolor. Distinctio atque similique temporibus hic! Repellendus quaerat consequatur error consequuntur vitae voluptatem esse delectus fugit blanditiis unde. Fugit corrupti repellendus adipisci autem consectetur.
                    Quisquam illum non laudantium facere asperiores dolor ut distinctio, fugiat ullam provident ab eligendi, obcaecati labore, amet incidunt ipsum repellat ipsa. Illo dignissimos error quod eveniet earum facere fugit animi.
                    Sapiente, ut velit. Beatae nihil doloribus quidem eaque officiis id, sint rem voluptate vitae. Exercitationem nisi, ut cum voluptatum, itaque necessitatibus dolorum dolorem accusamus enim repellendus, explicabo nemo illum beatae!
                    Fugiat voluptatem odio obcaecati repellat! Autem, labore? Ipsa vitae, deserunt eligendi fuga ex, ipsam similique voluptate molestiae obcaecati nam eum error voluptatum ut nihil nostrum non tempore corporis accusantium beatae.
                </span>
            </div>
        </div>
        <div class="comments" v-show="showCom">
            <h1>Комменарии</h1>
        </div>
        <div class="resources-doc" v-show="showDop">
            <h1>Дополнительные материалы</h1>
            <ul class="documents">
                <li><a href="#" class="doc-item fa fa-folder-open-o"> Название файла</a><span>n MB</span></li>
            </ul>
        </div>
        <div class="author-wrapper">
            <div class="author-page">
                <div class="info-wrapper">
                    <div class="avatar"></div>
                    <div class="author-info">
                        <a href="#" class="author-name">Имя Автора</a>
                        <div class="geoposition fa fa-map-marker"> Лондон</div>
                    </div>
                </div>
                <div class="counter-wrapper">
                    <div class="fol-count">
                        <a class="counter fa fa-group">1523</a>
                    </div>
                    <div class="courses-count">
                        <a class="fa fa-graduation-cap">20<span> курсов</span></a>
                        
                    </div>
                </div>
                <ul class="social-author">
                    <li><a href="#"><div><i class="fa fa-facebook"></i></div></a></li>
                    <li><a href="#"><div><i class="fa fa-twitter"></i></div></a></li>
                    <li><a href="#"><div><i class="fa fa-instagram"></i></div></a></li>
                    <li><a href="#"><div><i class="fa fa-vk"></i></div></a></li>
                    <li><a href="#"><div><i class="fa fa-youtube"></i></div></a></li>
                </ul>
                <div class="follow-btn">
                <button class="fa" v-bind:class="{'fa-plus': isActivePlus}" 
                v-on:click="sub=!sub, isActivePlus=!isActivePlus">{{ subText }}</button>
                </div>
            </div>
        </div>
        
    </div>
    
</div>
</template>

<script>
export default {
    name: "Course"
}
</script>