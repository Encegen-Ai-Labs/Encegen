/**
 * Encegen Word Document (.doc) Downloader Utility
 * Generates and downloads a clean, properly aligned Microsoft Word document
 * containing exactly the data entered from the admin panel / backend.
 */

export interface ReportData {
  title: string;
  category?: string;
  author?: string;
  author_role?: string;
  meta?: string;
  description?: string;
  summary?: string;
  content?: string;
}

export function downloadReportAsWord(report: ReportData) {
  const title = (report.title || '').trim();
  const category = (report.category || '').trim();
  const author = (report.author || '').trim();
  const authorRole = (report.author_role || '').trim();
  const meta = (report.meta || '').trim();
  const summary = (report.description || report.summary || '').trim();
  const content = (report.content || '').trim();

  // Format content paragraphs cleanly
  const paragraphsHtml = content
    ? content
        .split('\n\n')
        .filter((p) => p.trim())
        .map(
          (p) =>
            `<p style="margin: 0 0 12pt 0; font-size: 11pt; line-height: 1.6; color: #1e293b; text-align: justify;">${p
              .trim()
              .replace(/\n/g, '<br/>')}</p>`
        )
        .join('')
    : '';

  const docHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>${title}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: 8.5in 11.0in;
      margin: 1.0in 1.0in 1.0in 1.0in;
    }
    body {
      font-family: 'Calibri', 'Arial', sans-serif;
      font-size: 11pt;
      line-height: 1.6;
      color: #0f172a;
      background-color: #ffffff;
    }
    .header-tag {
      font-size: 10pt;
      font-weight: bold;
      color: #2563eb;
      text-transform: uppercase;
      letter-spacing: 0.5pt;
      margin-bottom: 6pt;
    }
    h1.doc-title {
      font-size: 20pt;
      font-weight: bold;
      color: #0f172a;
      line-height: 1.3;
      margin: 0 0 10pt 0;
    }
    .meta-bar {
      width: 100%;
      border-top: 1pt solid #e2e8f0;
      border-bottom: 1pt solid #e2e8f0;
      padding: 6pt 0;
      margin-bottom: 18pt;
      font-size: 9.5pt;
      color: #64748b;
    }
    .meta-bar td {
      padding: 2pt 0;
    }
    .section-title {
      font-size: 13pt;
      font-weight: bold;
      color: #1e3a8a;
      margin: 16pt 0 8pt 0;
      border-bottom: 0.5pt solid #cbd5e1;
      padding-bottom: 3pt;
    }
    .summary-box {
      font-size: 11pt;
      line-height: 1.6;
      color: #334155;
      margin-bottom: 14pt;
      text-align: justify;
    }
  </style>
</head>
<body>
  ${category ? `<div class="header-tag">${category}</div>` : ''}

  <h1 class="doc-title">${title}</h1>

  ${
    author || meta
      ? `
  <table class="meta-bar" width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td>${author ? `<strong>Author:</strong> ${author}${authorRole ? ` (${authorRole})` : ''}` : ''}</td>
      <td style="text-align: right;">${meta ? `<strong>Details:</strong> ${meta}` : ''}</td>
    </tr>
  </table>`
      : ''
  }

  ${
    summary
      ? `
  <div class="section-title">Summary</div>
  <div class="summary-box">${summary.replace(/\n/g, '<br/>')}</div>`
      : ''
  }

  ${
    paragraphsHtml
      ? `
  <div class="section-title">Content</div>
  ${paragraphsHtml}`
      : ''
  }
</body>
</html>
  `.trim();

  // Create Blob and trigger download
  const blob = new Blob(['\ufeff', docHtml], {
    type: 'application/msword;charset=utf-8'
  });

  const cleanFilename = (title || 'Report')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60);

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${cleanFilename || 'report'}.doc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
