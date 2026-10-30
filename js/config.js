/* =========================================================
   Cấu hình triển khai – Check-in khi vào ca
   MỌI THỨ Ở ĐÂY LÀ PUBLIC: trình duyệt tải file này nguyên văn,
   ai mở trang cũng đọc được. KHÔNG đặt khóa bí mật, mã nhân viên
   hay tên ai vào đây. Chỉ có URL script, độ dài mã và vài tham số.
   ========================================================= */
window.APP_CONFIG = {
  APP_NAME: 'Check-in khi vào ca',
  VERSION: '0.1.0',

  /* DÁN URL VÀO ĐÂY: URL Web App của Google Apps Script sau khi Deploy,
     dạng 'https://script.google.com/macros/s/<ID>/exec'.
     Để trống → app không dò tên, không gửi, chỉ ghi console.warn và vẫn cho check-in.
     Test local với mock API của backend-dev (tools/mock-api.js, có ?action=lookup,
     ?action=ping và POST): tạm đặt GOOGLE_SCRIPT_URL: 'http://localhost:8787/'
     rồi nhớ trả về '' trước khi đẩy lên GitHub. */
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzJw_bOTSq4RTbGUhd8TFraOlqKPYM7mea5EOFIcgCstuAQi5rKDDXY1yol8pIZVBxe-A/exec',

  /* Dò tên từ tab DanhSach: false = tạm tắt (anh Thông quyết 27/10/2026). Khi tắt, app không gọi
     ?action=lookup, chỉ chào chung "Xin chào anh/chị"; cột Tên trên Sheet do script tự tra nếu có DanhSach.
     Muốn bật lại: đổi thành true, không cần sửa gì khác. */
  LOOKUP_ENABLED: false,

  /* Mã số nhân viên: dò tên khi gõ đủ ID_MIN_LENGTH ký tự hoặc khi rời ô (chỉ khi LOOKUP_ENABLED). */
  ID_MIN_LENGTH: 4,
  ID_MAX_LENGTH: 8,
  ID_NUMERIC: true,            // true → bàn phím số (inputmode="numeric"); false nếu mã có chữ

  /* Dò tên: quá LOOKUP_TIMEOUT_MS thì coi như không tìm thấy, không báo đỏ. */
  LOOKUP_TIMEOUT_MS: 1500,
  LOOKUP_DEBOUNCE_MS: 400,

  /* Ảnh capybara nằm ngay trong thư mục assets/ của app (16 ảnh đã nén ≤ 100 KB, cạnh dài 400 px,
     gốc từ repo nhatkymebau 0,8–1,7 MB/ảnh). Đường dẫn tương đối nên chạy được cả local lẫn GitHub Pages.
     Muốn dùng lại ảnh gốc: đổi thành 'https://raw.githubusercontent.com/ditruyenhungvuong/nhatkymebau/main/'.
     Đổi ở đây thì đổi luôn href của <link rel="preload"> trong index.html. */
  ASSET_BASE: 'assets/',

  /* Bản sao dự phòng trong localStorage, giữ tối đa BACKUP_MAX lượt gần nhất. */
  BACKUP_KEY: 'checkin_vao_ca_backup',
  BACKUP_MAX: 20
};
