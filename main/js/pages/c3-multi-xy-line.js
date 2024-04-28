//[c3 charts Javascript]

//Project:	Doclinic - Responsive Admin Template
//Primary use:   Used only for the morris charts


$(function() {
    var t = c3.generate({
        bindto: "#multiple-xy",
        size: { height: 350 },
        point: { r: 4 },
        color: { pattern: ["#165BAA"] },
        data: {
            xs: { data1: "x1" },
            columns: [
                ['x1', 10, 30, 45, 50, 70, 100],
				['data1', 30, 200, 100, 400, 150, 250],
            ]
        },
        grid: { y: { show: !0 } }
    });
});