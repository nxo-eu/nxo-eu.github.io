/*
# ********************************************************************************** #
#                                                                                    #
#                                   ::::    :::     :::     ::::    :::  ::::::::    #
#   Main Script                    :+:+:   :+:   :+: :+:   :+:+:   :+: :+:    :+:    #
#                                 :+:+:+  +:+  +:+   +:+  :+:+:+  +:+ +:+    +:+     #
#   Powered by: Team NANO        +#+ +:+ +#+ +#++:++#++: +#+ +:+ +#+ +#+    +:+      #
#                               +#+  +#+#+# +#+     +#+ +#+  +#+#+# +#+    +#+       #
#   NXO                        #+#   #+#+# #+#     #+# #+#   #+#+# #+#    #+#        #
#                             ###    #### ###     ### ###    ####  ########          #
#                                                                                    #
# ********************************************************************************** #
*/

// Dynamic footer date
const current_year = /\d{4}/.exec(Date())[0]
document.querySelector('#current_year').innerHTML = current_year

// Translation dropdown
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
      if (item.innerHTML == "FR") {
        document.querySelectorAll('.fr').forEach(item => {
          item.style.display = "inline";
        });
        document.querySelectorAll('.en').forEach(item => {
          item.style.display = "none";
        });
      } else {
        document.querySelectorAll('.fr').forEach(item => {
          item.style.display = "none";
        });
        document.querySelectorAll('.en').forEach(item => {
          item.style.display = "inline";
        });
      }
    })
  })

// Default is English
document.querySelectorAll('.fr').forEach(item => {
item.style.display = "none";
});
