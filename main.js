        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)

        const tabs = $$('.tab-item')
        const panes = $$('.tab-pane')

        const tabActive = $('.tab-item.active')
        const line = $('.tabs .line')

        // logic giúp cho đường line ngang bằng với chiều ngang của tab
        line.style.left = tabActive.offsetLeft + 'px' 
        line.style.width = tabActive.offsetWidth + 'px' 

        tabs.forEach((tab, index) => {
            
            const pane = panes [index]

            tab.onclick = function () {

                //xử lý tabs khi click vào tabs
                $('.tab-item.active').classList.remove('active') 
                this.classList.add('active') 

                //xử lý content khi click vào tabs
                $('.tab-pane.active').classList.remove('active')
                pane.classList.add('active')

                line.style.left = this.offsetLeft + 'px' 
                line.style.width = this.offsetWidth + 'px' 
            }
        })