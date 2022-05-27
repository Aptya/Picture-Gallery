let pics = ["image01.jpg", "image02.jpg", "image03.jpg", "image04.jpg"];

            const clickablePic01 = document.getElementById("img01")
            clickablePic01.addEventListener("click", function () {
                changePic(0);
            });

            const clickablePic02 = document.getElementById("img02")
            clickablePic02.addEventListener("click", function () {
                changePic(1);
            });

            const clickablePic03 = document.getElementById("img03")
            clickablePic03.addEventListener("click", function () {
                changePic(2);
            });

            const clickablePic04 = document.getElementById("img04")
            clickablePic04.addEventListener("click", function () {
                changePic(3);
            });

            function changePic(picsIndex) {
                document.getElementById("mainImg").style.backgroundImage = "url('./images/" + pics[picsIndex] + "')";
            }

            const clickableBlt01 = document.getElementById("blt01")
            clickableBlt01.addEventListener("click", function () {
                changePicMobSize(0);
            });

            const clickableBlt02 = document.getElementById("blt02")
            clickableBlt02.addEventListener("click", function () {
                changePicMobSize(1);
            });

            const clickableBlt03 = document.getElementById("blt03")
            clickableBlt03.addEventListener("click", function () {
                changePicMobSize(2);
            });

            const clickableBlt04 = document.getElementById("blt04")
            clickableBlt04.addEventListener("click", function () {
                changePicMobSize(3);
            });

            function changePicMobSize(picsIndex) {
                document.getElementById("mainImgMobSize").src = "./images/" + pics[picsIndex];
            }