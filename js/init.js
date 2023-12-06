document.addEventListener('DOMContentLoaded', () => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
    /*
    M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {
        accordion: false
    });
    */
    // Materialize v2.0.1-alpha のバグ、クラスがcollapsibleかつexpandableの要素にactiveクラスを付けても開かない
    // 処置
    const collapsible_instances = M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {
        accordion: false
    });
    collapsible_instances.forEach(els => els.el.querySelectorAll('li.active > .collapsible-body').forEach(el => el.style.display = 'block'));
    // 処置終わり
});