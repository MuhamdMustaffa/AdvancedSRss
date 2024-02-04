import React, { Component } from 'react';
import './Excel.css';
import * as XLSX from 'xlsx';

class Excel extends Component {
  constructor(props) {
    super(props);
    this.excelFileInput = React.createRef();
    this.excelData = React.createRef();
  }

  componentDidMount() {
    if (this.excelFileInput.current.files.length > 0) {
      this.processFile(this.excelFileInput.current.files[0]);
    }

    this.excelFileInput.current.addEventListener('change', (e) => {
      this.processFile(e.target.files[0]);
    });
  }

  processFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const html = XLSX.utils.sheet_to_html(sheet);
      this.excelData.current.innerHTML = html;

      const table = this.excelData.current;

      // تظليل الصفوف التي تحتوي على "مدير عام" باللون الأخضر و"رئيس قطاع" باللون الأحمر
      const rows = table.querySelectorAll('tr');
      rows.forEach((row) => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell) => {
          const cellText = cell.textContent.trim();
          if (cellText === 'مدير عام') {
            row.classList.add('general-manager');
          } else if (cellText === 'رئيس قطاع') {
            row.classList.add('department-head');
          }
        });
      });

      // إضافة زر "نسخ" بجانب كل عنوان بريد إلكتروني
      const emails = table.querySelectorAll('td');
      emails.forEach((email) => {
        const emailText = email.textContent.trim();
        if (emailText.includes('@te.eg')) {
          const copyButton = document.createElement('button');
          copyButton.innerText = 'نسخ';
          copyButton.className = 'copy-button';
          copyButton.addEventListener('click', (event) => {
            event.stopPropagation();
            this.copyToClipboard(emailText);
          });

          const cell = email.parentNode;
          cell.appendChild(copyButton);
        }
      });
    };

    reader.readAsArrayBuffer(file);
  };

  copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('تم نسخ البريد الإلكتروني: ' + text);
  }

  render() {
    return (
      <div>
        <input type="file" ref={this.excelFileInput} accept=".xlsx" />
        <table ref={this.excelData}></table>
      </div>
    );
  }
}

export default Excel;