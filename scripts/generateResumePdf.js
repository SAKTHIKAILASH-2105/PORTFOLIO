import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard A4 page: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();
  
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  // Read Profile Photo
  const photoPath = path.resolve('public/profile.jpg');
  let embeddedImage = null;
  if (fs.existsSync(photoPath)) {
    const photoBytes = fs.readFileSync(photoPath);
    embeddedImage = await pdfDoc.embedJpg(photoBytes);
  }

  // Colors
  const cDark = rgb(0.1, 0.12, 0.16); // #1a1e28
  const cPrimary = rgb(0.55, 0.08, 0.14); // Royal Burgundy #8c1424
  const cCopper = rgb(0.85, 0.45, 0.18); // Industrial Copper #d9732e
  const cGrey = rgb(0.35, 0.38, 0.44);
  const cLine = rgb(0.82, 0.84, 0.88);

  const margin = 40;
  let y = height - margin;

  // Top Accent Bar (Prismatic Multi-color bar)
  page.drawRectangle({
    x: margin,
    y: y,
    width: width - margin * 2,
    height: 3,
    color: cCopper,
  });

  y -= 12;

  // 1. HEADER SECTION (With Photo)
  const photoSize = 75;
  const photoX = width - margin - photoSize;
  const photoY = y - photoSize;

  if (embeddedImage) {
    // Photo Border Box
    page.drawRectangle({
      x: photoX - 2,
      y: photoY - 2,
      width: photoSize + 4,
      height: photoSize + 4,
      color: rgb(0.95, 0.95, 0.97),
      borderColor: cCopper,
      borderWidth: 1.5,
    });

    // Draw Image
    page.drawImage(embeddedImage, {
      x: photoX,
      y: photoY,
      width: photoSize,
      height: photoSize,
    });
  }

  // Name & Titles on Left
  page.drawText('SAKTHI KAILASH', {
    x: margin,
    y: y - 4,
    size: 22,
    font: fontBold,
    color: cPrimary,
  });

  page.drawText('Mechatronics Engineering Student | Aspiring VLSI & Embedded Systems Engineer', {
    x: margin,
    y: y - 22,
    size: 10.5,
    font: fontBold,
    color: cDark,
  });

  page.drawText('Rathinam Technical Campus • Undergraduate Cycle: 2025 – 2029', {
    x: margin,
    y: y - 36,
    size: 9.5,
    font: fontItalic,
    color: cCopper,
  });

  // Contact details line
  page.drawText('Email: sakthikailash500@gmail.com   |   Location: India', {
    x: margin,
    y: y - 52,
    size: 9,
    font: fontRegular,
    color: cGrey,
  });

  page.drawText('LinkedIn: linkedin.com/in/mr-sakthi-kailash-p-b35982383   |   GitHub: github.com/SAKTHIKAILASH-2105', {
    x: margin,
    y: y - 65,
    size: 8.5,
    font: fontRegular,
    color: cGrey,
  });

  y = photoY - 14;

  // Section Divider Helper
  const drawSectionHeader = (title) => {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y,
      size: 11,
      font: fontBold,
      color: cPrimary,
    });

    page.drawLine({
      start: { x: margin, y: y - 3 },
      end: { x: width - margin, y: y - 3 },
      thickness: 1,
      color: cLine,
    });

    y -= 16;
  };

  // 2. PROFESSIONAL SUMMARY
  drawSectionHeader('Executive Engineering Summary');
  const summaryText = 
    "Enthusiastic Mechatronics Engineering student at Rathinam Technical Campus with strong fundamentals in " +
    "digital electronics, RTL architecture, Verilog HDL synthesis, and embedded microcontroller firmware. " +
    "Hands-on experience developing physical hardware prototypes including ESP32 multi-sensor telemetry nodes, " +
    "I2S digital audio DSP filters, and precision 3D CAD parametric assemblies. Eager to leverage multidisciplinary " +
    "hardware and silicon design capabilities for challenging core engineering roles, research, and internships.";

  // Text wrap helper
  function drawWrappedText(text, x, startY, maxWidth, size, font, color, lineHeight = 13) {
    const words = text.split(' ');
    let currentLine = '';
    let currY = startY;

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const textWidth = font.widthOfTextAtSize(testLine, size);
      if (textWidth > maxWidth) {
        page.drawText(currentLine, { x, y: currY, size, font, color });
        currY -= lineHeight;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      page.drawText(currentLine, { x, y: currY, size, font, color });
      currY -= lineHeight;
    }
    return currY;
  }

  y = drawWrappedText(summaryText, margin, y, width - margin * 2, 9, fontRegular, cDark, 12.5) - 6;

  // 3. EDUCATION
  drawSectionHeader('Education');
  page.drawText('Bachelor of Engineering (B.E.) in Mechatronics Engineering', {
    x: margin,
    y: y,
    size: 10.5,
    font: fontBold,
    color: cDark,
  });

  page.drawText('2025 – 2029', {
    x: width - margin - 60,
    y: y,
    size: 9.5,
    font: fontBold,
    color: cPrimary,
  });

  y -= 13;
  page.drawText('Rathinam Technical Campus, Coimbatore, Tamil Nadu', {
    x: margin,
    y: y,
    size: 9,
    font: fontItalic,
    color: cGrey,
  });

  y -= 12;
  page.drawText('Relevant Coursework: Digital Electronics, Microcontrollers & Microprocessors, Verilog HDL, Control Systems, Sensor Interfacing, CAD & Kinematics.', {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: cDark,
  });

  y -= 18;

  // 4. TECHNICAL COMPETENCIES
  drawSectionHeader('Technical Competencies');
  const skills = [
    { cat: 'Digital Silicon & VLSI:', items: 'Verilog HDL, RTL Design, Combinational/Sequential Logic, Finite State Machines (FSM), ALU Pipelines, EDA Simulation.' },
    { cat: 'Embedded Firmware & DSP:', items: 'ESP32, ESP32-S3 Dual-Core, Arduino, I2S Digital Audio, MPU6050 6-DOF IMU, UART/I2C/SPI Sensor Buses, FreeRTOS basics.' },
    { cat: 'Mechanical & 3D CAD:', items: 'Autodesk Fusion 360, SolidWorks, Parametric Enclosures, Kinematic Drive Assemblies, ±0.05mm Fit Clearances, 3D Prototyping.' },
    { cat: 'Programming & Software:', items: 'C, C++, Embedded C, Python, Git, GitHub, VS Code, Digital Multimeter & Oscilloscope Diagnostics.' },
  ];

  for (const s of skills) {
    page.drawText(s.cat, {
      x: margin,
      y: y,
      size: 9,
      font: fontBold,
      color: cPrimary,
    });
    page.drawText(s.items, {
      x: margin + 145,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: cDark,
    });
    y -= 13;
  }

  y -= 8;

  // 5. FEATURED ENGINEERING PROJECTS
  drawSectionHeader('Featured Engineering Projects');
  const projects = [
    {
      title: 'Smart Voice-Assisted Intelligent Robot',
      tech: 'ESP32-S3, I2S Digital Microphone, Audio DSP, Dual H-Bridge Motor Driver',
      bullets: [
        'Designed an intelligent electro-mechanical rover utilizing ESP32-S3 dual-core microcontroller and I2S digital audio protocol.',
        'Integrated noise-cancelling DSP filtering and edge acoustic triggering for real-time robotic navigation and command telemetry.',
        'Fabricated custom chassis with weight-reduction geometry and low-latency motor actuation control.'
      ]
    },
    {
      title: 'Verilog HDL 32-Bit ALU & RTL Processor Subsystem',
      tech: 'Verilog HDL, ModelSim, Digital Logic Design, Synthesis Flow',
      bullets: [
        'Developed synthesizable RTL digital architecture including arithmetic, bitwise logic, barrel shifting, and comparison flags.',
        'Engineered 4-state control FSM for multi-cycle execution pipelines and verified timing closures with comprehensive testbenches.'
      ]
    },
    {
      title: 'IoT Environmental Telemetry & Multi-Sensor Hardware Node',
      tech: 'ESP32, MPU6050 6-DOF IMU, Ultrasonic Sensors, OLED Display, C++',
      bullets: [
        'Constructed a multi-parameter sensor acquisition station capturing real-time angular orientation, distance, and environmental data.',
        'Implemented non-blocking sensor polling routines and encrypted telemetry broadcasting over Wi-Fi/Bluetooth channels.'
      ]
    },
    {
      title: 'Parametric 3D CAD Enclosures & Mechanical Assemblies',
      tech: 'Autodesk Fusion 360, SolidWorks, Rapid Prototyping',
      bullets: [
        'Modeled 7 verified industrial CAD enclosures including sensor mounts, modular snap-fit casings, and interlocking gear trains.',
        'Applied engineering tolerances ensuring seamless alignment with PCB drill footprints and component clearance envelopes.'
      ]
    }
  ];

  for (const proj of projects) {
    page.drawText(proj.title, {
      x: margin,
      y: y,
      size: 9.5,
      font: fontBold,
      color: cDark,
    });

    page.drawText(`[ ${proj.tech} ]`, {
      x: width - margin - fontRegular.widthOfTextAtSize(`[ ${proj.tech} ]`, 8),
      y: y,
      size: 8,
      font: fontItalic,
      color: cCopper,
    });

    y -= 11;
    for (const bullet of proj.bullets) {
      page.drawText('•', { x: margin + 6, y, size: 8, font: fontBold, color: cPrimary });
      page.drawText(bullet, { x: margin + 14, y, size: 8, font: fontRegular, color: cDark });
      y -= 10.5;
    }
    y -= 3;
  }

  y -= 4;

  // 6. VERIFIED CERTIFICATIONS & ACCREDITATIONS
  drawSectionHeader('Verified Certifications & Accreditations');
  const certs = [
    { title: 'NPTEL Elite Certification — Microprocessors and Microcontrollers', issuer: 'IIT Kharagpur / Ministry of Education, Govt. of India', date: 'Jul-Oct 2025' },
    { title: 'NPTEL Elite Certification — Digital Electronic Circuits', issuer: 'IIT Madras / Ministry of Education, Govt. of India', date: 'Jul-Oct 2025' },
    { title: 'AWS Cloud IoT Fundamentals & Embedded Architecture', issuer: 'LinkedIn Learning Accredited Credential', date: '2025' },
    { title: 'Hands-on PCB Design & Hardware Rapid Prototyping Workshop', issuer: 'Rathinam Technical Campus Mechatronics Dept.', date: '2025' }
  ];

  for (const c of certs) {
    page.drawText(`• ${c.title}`, {
      x: margin + 4,
      y: y,
      size: 8.5,
      font: fontBold,
      color: cDark,
    });

    page.drawText(`${c.issuer} (${c.date})`, {
      x: margin + 20,
      y: y - 9.5,
      size: 7.8,
      font: fontItalic,
      color: cGrey,
    });

    y -= 18;
  }

  // Footer declaration
  page.drawLine({
    start: { x: margin, y: 35 },
    end: { x: width - margin, y: 35 },
    thickness: 0.5,
    color: cLine,
  });

  page.drawText('Portfolio & Code Repositories: https://portfoliosakthikailash.netlify.app/  •  Verified Authenticity', {
    x: margin,
    y: 25,
    size: 7.5,
    font: fontItalic,
    color: cGrey,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public/Sakthi_Kailash_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Resume successfully generated at: ${outputPath} (${pdfBytes.length} bytes)`);
}

generateResume().catch(err => {
  console.error('Failed to generate resume PDF:', err);
  process.exit(1);
});
