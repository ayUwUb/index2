function mood(){
    mo={
        m:['angrym.jpg','sadm.jpg','happym.jpg'],
        w:['angryw.jpg','sadw.jpg','happyw.jpg'],
        moo:['angry','sad','happy']
    }
    r=Math.trunc(Math.random()*3)
    ma='man'
    wo='women'
    if(document.getElementById('h').checked){
        document.getElementById('img').src=mo.m[r]
        document.getElementById('p').innerHTML=mo.moo[r]+' '+ma
    }
    else if(document.getElementById('f').checked){
        document.getElementById('img').src=mo.w[r]
        document.getElementById('p').innerHTML=mo.moo[r]+' '+wo
    }
}