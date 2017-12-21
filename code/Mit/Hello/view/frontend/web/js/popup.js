require(
        [
            'jquery',
            'Magento_Ui/js/modal/modal'
        ],
        function(
            $,
            modal
        ) {
            var options = {
                type: 'popup',
                responsive: true,
                innerScroll: true,
                title: 'NewsLetter',
                buttons: [{
                    text: $.mage.__('Continue'),
                    class: '',
                    click: function () {
                        this.closeModal();
                    }
                }]
            };

            var popup = modal(options, $('#popup-mpdal'));
            //$("#click-me").on('click',function(){ 
                $(window).load(function(){      
                $("#popup-mpdal").modal("openModal");
            });

        }
    );