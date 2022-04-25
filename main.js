var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {
    $(function() {

        // search area open / close
        $('.search-area-btn').click(function(event) {
            event.preventDefault();
            if ($('.search-area-btn').children('.ic_head_search').attr('id') == 'off') {
                $('.search-area-btn').children('.ic_head_search').addClass('ic_head_search_on');
                $('#search-btn').addClass('mod-head-nav__search-on');
                $('.search-area-btn').children('.ic_head_search').attr('id', 'on');
                $('.mod-headSearch').fadeIn('fast');
            } else {
                $('.search-area-btn').children('.ic_head_search').removeClass('ic_head_search_on');
                $('#search-btn').removeClass('mod-head-nav__search-on');
                $('.search-area-btn').children('.ic_head_search').attr('id', 'off');
                $('.mod-headSearch').fadeOut('fast');
            }
            return true;
        });

        // paginate selector action
        $('.select-page').change(function() {
            var url = $('#currentUrl').val() + 'page:' + $(this).val();
            $(location).attr('href', url);
        });

        // ご意見投稿
        $('#input-opinion').on('click', function() {
            $.ajax({
                type: 'POST',
                url: '/opinion/',
                data: {
                    'comment': $('#opinion').val()
                },
                cache: false
            }).done(function(result) {
                $('.mod-post-finishTxt').show();
            }).fail(function(result) {
            });
        });

        // テキストエリアのサイズ変更
        $('.ic_wide').click(function(event) {
            // 対象テキストエリア取得
            textarea = $(this).parent('.mod-post-textarea').find('textarea');
            if (textarea.attr('rows') == 20) {
                // 最小行サイズを取得し設定 無い場合はサイズ8
                row = textarea.attr('minrows');
                textarea.attr('rows', (row ? row : 8));
            } else {
                // 行サイズ20では無い場合今の行サイズを保存しておき、サイズ20を設定
                textarea.attr('minrows', textarea.attr('rows'));
                textarea.attr('rows', 20);
            }
            return true;
        });
    });
    
    // 文字切り替え
    $.fn.extend({
        toggleText: function(a, b) {
            txt = this.html();
            if (this.text() == a) {
                this.html(txt.replace(a, b))
            } else {
                this.html(txt.replace(b, a))
            }
        }
    });
    
    // 新規掲示板 もっと見るボタン開閉
    $('.js-newBbs-more-btn').on('click', function() {
        $('.js-newBbs-more').toggle();
        $(this).find('span').toggleClass('ic_arrow06_b');
        $(this).find('span').toggleClass('ic_arrow06_t');
        $(this).find('a').toggleText('もっと見る', '閉じる');
    });
});

/***********************************************************************************************************************
 * 要素の切替
 **********************************************************************************************************************/
$(function() {
    var $setElem = $('.imgswitch'), pcName = '_pc', spName = '_sp', replaceWidth = 740;

    $setElem.each(function() {
        var $this = $(this);
        function imgSize() {
            var windowWidth = parseInt($(document).width());
            if (windowWidth >= replaceWidth) {
                $this.attr('src', $this.attr('src').replace(spName, pcName)).css({
                    visibility: 'visible'
                });
            } else if (windowWidth < replaceWidth) {
                $this.attr('src', $this.attr('src').replace(pcName, spName)).css({
                    visibility: 'visible'
                });
            }
        }
        $(window).resize(function() {
            imgSize();
        });
        imgSize();
    });
});

}
/*
     FILE ARCHIVED ON 13:12:36 Mar 31, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:21:25 Apr 22, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 119.786
  exclusion.robots: 0.294
  exclusion.robots.policy: 0.282
  cdx.remote: 0.109
  esindex: 0.012
  LoadShardBlock: 78.788 (3)
  PetaboxLoader3.datanode: 100.979 (5)
  CDXLines.iter: 20.786 (3)
  load_resource: 154.491 (2)
  PetaboxLoader3.resolve: 84.873 (2)
*/