// 1. Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, 
//không cần kiểm tra hợp lệ).
//Tìm ngày, tháng, năm của ngày tiếp theo. 
//Tương tự tìm ngày tháng năm của ngày trước đó.

//      Đầu vào
//  1. Nhập ngày
//  2. Nhập tháng
//  3. Nhập năm
//      Xử lý
//  Nó có nhiều trường hợp xảy ra:
//  1. Ngày 31 tháng 12 năm 2022
//  Thì nó sẽ bước qua cả ngày, tháng, năm luôn
//  2. Xét tháng có 30, 31 ngày
//  3. Xét tháng 2; Quy định cho nó là 29 hay 28 ngày luôn hay là?
//  phải xét theo năm nhuận/ năm không nhuận
//  4. Các trường hợp còn lại chỉ cần + thêm 01 ngày là được;
//  Trước mắt, cứ xét những ngày thông thường trước đã, chưa xét đến
//  những trường hợp đặc biệt;
//      Đầu ra
//  1. In ra được ngày tiếp theo;
//  2. In ra được ngày trước đó (Chỗ này lại phải xét ngày 01 hằng tháng
//  và tháng 02, tháng 03 - Rồi tháng trước đó 30, 31)
//  Ưu tiên: đầu ra số 01 trước;
//------------------------------------------------------------------------
document.getElementById("btnNgaymai__").onclick = function(){
    var so__Ngay__now = +document.getElementById("so_Ngay_now").value;
    var so__Thang__now = +document.getElementById("so_Thang_now").value;
    var so__Nam__now = +document.getElementById("so_Nam_now").value;

    if(so__Nam__now % 4 == 0 || so__Nam__now % 400 == 0)
    {
        if(so__Thang__now == 2)
        {
            if(so__Ngay__now < 29)
            {
                so__Ngay__now++;
            }
            else
            {
                so__Ngay__now++;
                so__Thang__now++;
            }
        }
        else if(
            so__Thang__now == 1 || 
            so__Thang__now == 3 || 
            so__Thang__now == 5 || 
            so__Thang__now == 7 ||
            so__Thang__now == 8 ||
            so__Thang__now == 10)
        {
            if(so__Ngay__now < 31)
            {
                so__Ngay__now++;
            }
            else
            {
                so__Ngay__now++;
                so__Thang__now++;
            };
        }
        else if(so__Thang__now == 4 || 
            so__Thang__now == 6 || 
            so__Thang__now == 9 || 
            so__Thang__now == 11)
        {
            if(so__Ngay__now < 30)
            {
                so__Ngay__now++;
            }
            else
            {
                so__Ngay__now++;
                so__Thang__now++;
            };
        }
        else if(so__Thang__now == 12)
        {
            if(so__Ngay__now < 31)
            {
                so__Ngay__now++;
            }
            else
            {
                so__Ngay__now = 1;
                so__Thang__now = 1;
                so__Nam__now++;
            }
        }
    }
    else
    {
        if(so__Thang__now == 2)
        {
            if(so__Ngay__now < 28)
            {
                so__Ngay__now++;
            }
            else
            {
                so__Ngay__now++;
                so__Thang__now++;
            }
        }
        else if(
            so__Thang__now == 1 || 
            so__Thang__now == 3 || 
            so__Thang__now == 5 || 
            so__Thang__now == 7 ||
            so__Thang__now == 8 ||
            so__Thang__now == 10)
        {
            if(so__Ngay__now < 31)
            {
                so__Ngay__now++;
            }
            else
            {
                so__Ngay__now++;
                so__Thang__now++;
            };
        }
        else if(so__Thang__now == 4 || 
            so__Thang__now == 6 || 
            so__Thang__now == 9 || 
            so__Thang__now == 11)
        {
            if(so__Ngay__now < 30)
            {
                so__Ngay__now++;
            }
            else
            {
                so__Ngay__now++;
                so__Thang__now++;
            };
        }
        else if(so__Thang__now == 12)
        {
            if(so__Ngay__now < 31)
            {
                so__Ngay__now++;
            }
            else
            {
                so__Ngay__now = 1;
                so__Thang__now = 1;
                so__Nam__now++;
            }
        }
        var inKQQ = "Ngày tiếp theo là Ngày " + so__Ngay__now + " tháng " + so__Thang__now + " năm " + so__Nam__now;
        document.getElementById("footerNgaytiepTheo__").innerHTML=inKQQ;
    }

    //Trường hợp phổ biến, không đụng những ngày đặc biệt
    //Làm bài tập 02 trước xong mới quẹo lại bài tập 01 được
    //Lí do phải xét từ Năm trước rồi đến Tháng rồi Mới đến ngày;
};

// 2. Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao 
// nhiêu ngày. (bao gồm tháng
// của năm nhuận)

//          Phân tích:
//Năm nhuận thì có gì?
//Năm không nhuận thì có gì?
//  Năm nhuận là năm chia hết cho 4;
//  Tháng 02 của Năm nhuận sẽ có 29 ngày;
//  Trường hợp đặc biệt của năm nhuận với những năm tròn thế kỷ thì
//xét nó chia hết cho 400;
//          Tháng có 31 ngày 1 3 5 7 8 10 12
//          Tháng có 30 ngày 4 6 9 11
//------------------------------------------------------------------------
document.getElementById("btnNgaymai").onclick = function(){
    var so__Thang = +document.getElementById("so_Thang_hientai").value;
    var so__Nam = +document.getElementById("so_Nam_hientai").value;
    //Xét từ năm trước
    if(so__Nam % 4 == 0 || so__Nam % 400 == 0)
    {
        if(so__Thang == 2)
        {
            var iNrAkQ = "Tháng này có 29 ngày";
        }
        else if(
            so__Thang == 1 || 
            so__Thang == 3 || 
            so__Thang == 5 || 
            so__Thang == 7 ||
            so__Thang == 8 ||
            so__Thang == 10 ||
            so__Thang == 12)
        {
            var iNrAkQ = "Tháng này có 31 ngày";
        }
        else if(so__Thang == 4 || 
            so__Thang == 6 || 
            so__Thang == 9 || 
            so__Thang == 11)
        {
            var iNrAkQ = "Tháng này có 30 ngày";
        }
    }
    else
    {
        if(so__Thang == 2)
        {
            var iNrAkQ = "Tháng này có 28 ngày";
        }
        else if(
            so__Thang == 1 || 
            so__Thang == 3 || 
            so__Thang == 5 || 
            so__Thang == 7 ||
            so__Thang == 8 ||
            so__Thang == 10 ||
            so__Thang == 12)
        {
            var iNrAkQ = "Tháng này có 31 ngày";
        }
        else if(so__Thang == 4 || 
            so__Thang == 6 || 
            so__Thang == 9 || 
            so__Thang == 11)
        {
            var iNrAkQ = "Tháng này có 30 ngày";
        }
        document.getElementById("footerNgaytiepTheo").innerHTML=iNrAkQ;
    }
}

// 2 bài trên feel thấy ớn!

// 3. Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
//      Đầu vào
//  1. Nhập số có 3 chữ số vào trước
//      Xử lý
//  1. Đầu tiên, phải tách ra từng số trước
//  Từng số ở đây là hàng đơn vị, hàng chục, hàng trăm
//  2. ...
//      Đầu ra
//  1. In ra cách đọc chữ số đó
//------------------------------------------------------------------------
document.getElementById("btnCachdoc").onclick = function(){
    var soCandoc = +document.getElementById("so_Co_3_chu_So").value;
    // Phải tách ra từng hàng trước
    // Đơn vị - Chục - Trăm
    var hangTram = Math.floor(soCandoc / 100);
    var hangChuc = Math.floor(soCandoc % 100 / 10);
    var hangDonvi = Math.floor(soCandoc % 10);
    // Khúc này lấy được rồi nè
    console.log(hangTram, hangChuc, hangDonvi);
    //
    switch (hangDonvi) {
        case 1:
            var kQhangDonvi = "Mốt"
            break;

        case 2:
            var kQhangDonvi = "Hai"
            break;

        case 3:
            var kQhangDonvi = "Ba"
            break;

        case 4:
            var kQhangDonvi = "Bốn"
            break;

        case 5:
            var kQhangDonvi = "Lăm"
            break;

        case 6:
            var kQhangDonvi = "Sáu"
            break;

        case 7:
            var kQhangDonvi = "Bảy"
            break;

        case 8:
            var kQhangDonvi = "Tám"
            break;
        
        case 9:
            var kQhangDonvi = "Chín"
            break;

        case 0:
            var kQhangDonvi = "Mươi"
            break;

        default:
            break;
    }
    //
    switch (hangChuc) {
        case 1:
            var kQhangChuc = "Mười"
            break;

        case 2:
            var kQhangChuc = "Hai"
            break;

        case 3:
            var kQhangChuc = "Ba"
            break;

        case 4:
            var kQhangChuc = "Bốn"
            break;

        case 5:
            var kQhangChuc = "Lăm"
            break;

        case 6:
            var kQhangChuc = "Sáu"
            break;

        case 7:
            var kQhangChuc = "Bảy"
            break;

        case 8:
            var kQhangChuc = "Tám"
            break;
        
        case 9:
            var kQhangChuc = "Chín"
            break;

        case 0:
            var kQhangChuc = "Linh"
            break;

        default:
            break;
    }
    //
    switch (hangTram) {
        case 1:
            var kQhangTram = "Một Trăm"
            break;

        case 2:
            var kQhangTram = "Hai Trăm"
            break;

        case 3:
            var kQhangTram = "Ba Trăm"
            break;

        case 4:
            var kQhangTram = "Bốn Trăm"
            break;

        case 5:
            var kQhangTram = "Năm Trăm"
            break;

        case 6:
            var kQhangTram = "Sáu Trăm"
            break;

        case 7:
            var kQhangTram = "Bảy Trăm"
            break;

        case 8:
            var kQhangTram = "Tám Trăm"
            break;
        
        case 9:
            var kQhangTram = "Chín Trăm"
            break;

        case 0:
            var kQhangTram = "Không Trăm"
            break;

        default:
            break;
    }
    var inKQra = kQhangTram  + " " + kQhangChuc + " " + kQhangDonvi;
    document.getElementById("footerCachdocSo").innerHTML = inKQra;
}

// 4. Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của
// trường đại học. Viết chương trình in tên sinh viên xa trường nhất
//      Đầu vào
//  1. Tên của 03 sinh viên
//  2. Toạ độ của 03 sinh viên
//  3. Toạ độ của trường ĐH
//      Xử lý
//  1. Gọi toạ độ có 2 giá trị x và y;
//  2. A - (xA, yA); B - (xB, yB); C - (xC, yC)
//  3. Toạ độ của trường là: TR (xT, yT)
//  4. Để biết thằng nào xa trường nhất chỉ cần tính độ dài từ nó đến
//  trường là bao nhiêu, xong. Đem giá trị tính ra được đi so sánh;
//      Đầu ra
//  1. In tên thằng xa nhất;

function soSanh(a, b, c) {
    var soLonnhat = a;
    if(soLonnhat < b)
    {
        soLonnhat = b;
    }
    else
    {
        soLonnhat = soLonnhat;
    }
    if(soLonnhat < c)
    {
        soLonnhat = c;
    }
    else
    {
        soLonnhat = soLonnhat;
    }
    return soLonnhat;
}

document.getElementById("btnKhoangcach").onclick = function () {
    
    //Toạ độ sinh Viên
    var xA = +document.getElementById("xA").value;
    var yA = +document.getElementById("yA").value;

    var xB = +document.getElementById("xB").value;
    var yB = +document.getElementById("yB").value;

    var xC = +document.getElementById("xC").value;
    var yC = +document.getElementById("yC").value;

    //Toạ độ trường
    var xT = +document.getElementById("xT").value;
    var yT = +document.getElementById("yT").value;

    //Tính độ dài của AT, BT, CT

    var AT = Math.sqrt(((xT - xA)*(xT - xA) + (yT - yA)*(yT - yA)));
    var BT = Math.sqrt(((xT - xB)*(xT - xB) + (yT - yB)*(yT - yB)));
    var CT = Math.sqrt(((xT - xC)*(xT - xC) + (yT - yC)*(yT - yC)));

    var m = soSanh(AT, BT, CT)

    switch (m) {
        case AT:
            var inKqRaLa = "Nguyễn Văn A";
            break;
    
        case BT:
            var inKqRaLa = "Nguyễn Văn A";
            break;

        case CT:
            var inKqRaLa = "Nguyễn Văn A";
            break;

        default:
            var inKqRaLa = "Không xác định";
            break;
    }
    document.getElementById("footerKhoangcach").innerHTML = inKqRaLa;
}

//Done