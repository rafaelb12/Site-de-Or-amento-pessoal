function toggleCollapse(collapseId) {
    var collapse = document.getElementById(collapseId);
    if (collapse.style.maxHeight) {
        collapse.style.maxHeight = null;
    } else {
        collapse.style.maxHeight = collapse.scrollHeight + "px";
    }
}
