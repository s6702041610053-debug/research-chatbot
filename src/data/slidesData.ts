export type SlideType = 'cover' | 'background' | 'objectives' | 'scope' | 'architecture' | 'workflow' | 'knowledgeBase' | 'testing' | 'results' | 'analysis' | 'demo' | 'summary' | 'future' | 'thankYou' | 'text';

export interface SlideData {
  chapterId: string;
  chapterTitle: string;
  id: string;
  title: string;
  type: SlideType;
  content?: string | string[];
}

export const slidesData: SlideData[] = [
  // Intro
  { chapterId: 'ch0', chapterTitle: 'บทนำ', id: 'cover', title: 'หน้าปก', type: 'cover' },
  
  // Chapter 1
  { chapterId: 'ch1', chapterTitle: 'บทที่ 1 บทนำ', id: '1.1', title: '1.1 ความเป็นมาและความสำคัญของปัญหา', type: 'background' },
  { chapterId: 'ch1', chapterTitle: 'บทที่ 1 บทนำ', id: '1.2', title: '1.2 วัตถุประสงค์การวิจัย', type: 'objectives' },
  { chapterId: 'ch1', chapterTitle: 'บทที่ 1 บทนำ', id: '1.3', title: '1.3 สมมติฐานการวิจัย', type: 'text', content: [
    'แชทบอท AI สำหรับตอบคำถามเกี่ยวกับการจัดการฐานข้อมูลและภาษา SQL ที่พัฒนาขึ้น มีประสิทธิภาพอยู่ในระดับดีขึ้นไป',
    'ผู้ใช้งานมีความพึงพอใจต่อการใช้งานแชทบอท AI สำหรับตอบคำถามเกี่ยวกับการจัดการฐานข้อมูลและภาษา SQL อยู่ในระดับมากขึ้นไป'
  ]},
  { chapterId: 'ch1', chapterTitle: 'บทที่ 1 บทนำ', id: '1.4', title: '1.4 ขอบเขตงานวิจัย', type: 'scope' },
  { chapterId: 'ch1', chapterTitle: 'บทที่ 1 บทนำ', id: '1.5', title: '1.5 ประโยชน์งานวิจัย', type: 'text', content: [
    'ได้แชทบอท AI สำหรับตอบคำถามเกี่ยวกับการจัดการฐานข้อมูลและภาษา SQL ที่สามารถนำมาใช้เป็นเครื่องมือช่วยสนับสนุนการเรียนรู้',
    'ผู้เรียนสามารถใช้แชทบอท AI เพื่อสอบถาม ทบทวน และค้นหาคำอธิบายได้ด้วยตนเอง ช่วยเพิ่มความสะดวกและลดข้อจำกัดด้านเวลา',
    'ผู้สอนสามารถนำแชทบอท AI ไปประยุกต์ใช้เป็นสื่อหรือเครื่องมือประกอบการจัดการเรียนการสอน',
    'เป็นแนวทางในการประยุกต์ใช้เทคโนโลยีปัญญาประดิษฐ์ (AI) เพื่อสนับสนุนการจัดการเรียนรู้ด้านเทคโนโลยีสารสนเทศ'
  ]},

  // Chapter 2
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.1', title: '2.1 ความรู้เบื้องต้นเกี่ยวกับข้อมูลและระบบแฟ้มข้อมูล', type: 'text', content: [
    'ข้อมูล (Data) หมายถึง ข้อเท็จจริงดิบที่ยังไม่ผ่านการประมวลผล',
    'สารสนเทศ (Information) คือข้อมูลที่ผ่านการประมวลผล คำนวณ และวิเคราะห์แล้ว',
    'ความรู้ (Knowledge) เป็นรูปแบบหรือแนวโน้มที่สกัดได้จากสารสนเทศ',
    'ชนิดของข้อมูล: ข้อความ ตัวเลข วันที่และเวลา รูปภาพ และเสียง',
    'โครงสร้างแฟ้มข้อมูล: แฟ้มข้อมูล (File) > เรคอร์ด (Record) > ฟิลด์ (Field) > ไบต์ (Byte) > บิต (Bit)'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.2', title: '2.2 ระบบฐานข้อมูล', type: 'text', content: [
    'ระบบฐานข้อมูล (Database System) คือการรวบรวมข้อมูลหรือแฟ้มข้อมูลที่เกี่ยวข้องกันไว้ในที่เดียว',
    'ระบบจัดการฐานข้อมูล (DBMS) เป็นซอฟต์แวร์ตัวกลางระหว่างผู้ใช้กับฐานข้อมูล',
    'ลดความซ้ำซ้อนของข้อมูล และเพิ่มความเป็นอิสระของข้อมูล'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.3', title: '2.3 สถาปัตยกรรมระบบฐานข้อมูล 3 ระดับ', type: 'text', content: [
    'ระดับภายนอก (External Level) มุมมองของผู้ใช้แต่ละกลุ่ม',
    'ระดับแนวคิด (Conceptual Level) โครงสร้างเชิงตรรกะของข้อมูลทั้งหมด',
    'ระดับภายใน (Internal Level) การจัดเก็บข้อมูลเชิงกายภาพ'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.4', title: '2.4 แบบจำลองข้อมูลเชิงสัมพันธ์และชนิดของคีย์', type: 'text', content: [
    'จัดเก็บข้อมูลเป็นตาราง (Relation) ประกอบด้วยแถว (Tuple) และคอลัมน์ (Attribute)',
    'ใช้ Primary Key ในการระบุความไม่ซ้ำซ้อนของข้อมูล',
    'ใช้ Foreign Key ในการเชื่อมโยงความสัมพันธ์ระหว่างตาราง'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.5', title: '2.5 แผนภาพอีอาร์ (ER-Diagram)', type: 'text', content: [
    'เครื่องมือออกแบบฐานข้อมูลในระดับแนวคิด',
    'ประกอบด้วย Entity (สิ่งที่เราสนใจ), Attribute (คุณสมบัติ), และ Relationship (ความสัมพันธ์)'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.6', title: '2.6 การแปลง ER-Diagram เป็นรีเลชัน', type: 'text', content: [
    'แปลง Entity เป็น Table',
    'แปลง Attribute เป็น Column',
    'การนำ Primary Key ไปเป็น Foreign Key เพื่อสร้างความสัมพันธ์ (1:1, 1:M, M:N)'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.7', title: '2.7 นอร์มัลไลเซชัน (Normalization)', type: 'text', content: [
    'กระบวนการลดความซ้ำซ้อนของข้อมูล',
    '1NF: ข้อมูลแต่ละช่องต้องมีค่าเดียว (Atomic)',
    '2NF: ต้องอยู่ใน 1NF และ Attribute ที่ไม่ใช่คีย์หลักต้องขึ้นอยู่กับคีย์หลักทั้งหมด',
    '3NF: ต้องอยู่ใน 2NF และ Attribute ที่ไม่ใช่คีย์หลักต้องไม่ขึ้นอยู่กับ Attribute ที่ไม่ใช่คีย์หลักด้วยกันเอง'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.8', title: '2.8 ภาษา SQL: DDL', type: 'text', content: [
    'Data Definition Language (DDL)',
    'คำสั่ง CREATE: สร้างตารางหรือฐานข้อมูล',
    'คำสั่ง ALTER: แก้ไขโครงสร้างตาราง',
    'คำสั่ง DROP: ลบตารางหรือฐานข้อมูล'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.9', title: '2.9 ภาษา SQL: SELECT', type: 'text', content: [
    'คำสั่งสำหรับการสืบค้นข้อมูลจากตาราง',
    'สามารถใช้ร่วมกับ WHERE เพื่อกรองข้อมูล',
    'ORDER BY สำหรับเรียงลำดับผลลัพธ์',
    'GROUP BY สำหรับจัดกลุ่มข้อมูล'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.10', title: '2.10 ภาษา SQL: JOIN', type: 'text', content: [
    'คำสั่งสำหรับการเชื่อมตารางหลายตารางเข้าด้วยกัน',
    'INNER JOIN: เอาเฉพาะข้อมูลที่ตรงกัน',
    'LEFT JOIN: เอาข้อมูลตารางซ้ายเป็นหลัก',
    'RIGHT JOIN: เอาข้อมูลตารางขวาเป็นหลัก'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.11', title: '2.11 แนวโน้มเทคโนโลยีที่เกี่ยวข้องกับฐานข้อมูล', type: 'text', content: [
    'Big Data: การจัดการข้อมูลขนาดใหญ่',
    'Machine Learning & AI: การนำข้อมูลไปใช้สอน AI',
    'IoT: ข้อมูลที่สตรีมมาจากอุปกรณ์เซ็นเซอร์ต่างๆ'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.12', title: '2.12 ความปลอดภัยของฐานข้อมูล', type: 'text', content: [
    'การกำหนดสิทธิ์การเข้าถึงข้อมูล (Authentication & Authorization)',
    'การเข้ารหัสข้อมูล (Encryption)',
    'การสำรองและกู้คืนข้อมูล (Backup & Recovery)'
  ]},
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.13', title: '2.13 หลักการพัฒนาแชทบอท', type: 'architecture' },
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.14', title: '2.14 การทำงานของแชทบอท', type: 'workflow' },
  { chapterId: 'ch2', chapterTitle: 'บทที่ 2 ทฤษฎีที่เกี่ยวข้อง', id: '2.15', title: '2.15 Knowledge Base', type: 'knowledgeBase' },

  // Chapter 3
  { chapterId: 'ch3', chapterTitle: 'บทที่ 3 วิธีการดำเนินการวิจัย', id: '3.1', title: '3.1 แบบแผนการวิจัย', type: 'text', content: [
    'การวิจัยเชิงทดลองและพัฒนา (Research and Development)',
    'พัฒนาแชทบอทและนำไปทดลองใช้งานจริงกับกลุ่มตัวอย่าง'
  ]},
  { chapterId: 'ch3', chapterTitle: 'บทที่ 3 วิธีการดำเนินการวิจัย', id: '3.2', title: '3.2 ประชากรและกลุ่มตัวอย่าง', type: 'text', content: [
    'ประชากร: นักเรียนหรือนักศึกษาที่ศึกษาเกี่ยวกับการจัดการฐานข้อมูลและภาษา SQL',
    'กลุ่มตัวอย่าง: นักเรียนหรือนักศึกษา จำนวน 30 คน ที่ได้มาโดยวิธีสุ่มกลุ่มตัวอย่างอย่างง่าย'
  ]},
  { chapterId: 'ch3', chapterTitle: 'บทที่ 3 วิธีการดำเนินการวิจัย', id: '3.3', title: '3.3 เครื่องมือที่ใช้ในงานวิจัย', type: 'text', content: [
    '1. แชทบอท AI สำหรับตอบคำถามเรื่องการจัดการฐานข้อมูลและภาษา SQL',
    '2. แบบทดสอบประสิทธิภาพและประเมินความแม่นยำของคำตอบ (Confusion Matrix)',
    '3. แบบสอบถามความพึงพอใจของผู้ใช้งาน'
  ]},
  { chapterId: 'ch3', chapterTitle: 'บทที่ 3 วิธีการดำเนินการวิจัย', id: '3.4', title: '3.4 การสร้างและหาคุณภาพเครื่องมือ', type: 'text', content: [
    'ศึกษาเอกสารและทฤษฎีที่เกี่ยวข้องเพื่อรวบรวมเป็น Knowledge Base',
    'พัฒนาแชทบอทด้วย Prompt Engineering และ LLM API',
    'ตรวจสอบความถูกต้องของเนื้อหาโดยผู้เชี่ยวชาญ (IOC)'
  ]},
  { chapterId: 'ch3', chapterTitle: 'บทที่ 3 วิธีการดำเนินการวิจัย', id: '3.5', title: '3.5 การดำเนินการทดลองและเก็บรวบรวมข้อมูล', type: 'text', content: [
    'นำแชทบอทไปให้กลุ่มตัวอย่างทดลองใช้งานจริง',
    'ให้กลุ่มตัวอย่างถามคำถามและบันทึกผลการตอบ (ถูก/ผิด/ตรงประเด็น/ไม่ตรงประเด็น)',
    'ให้กลุ่มตัวอย่างทำแบบสอบถามความพึงพอใจ'
  ]},
  { chapterId: 'ch3', chapterTitle: 'บทที่ 3 วิธีการดำเนินการวิจัย', id: '3.6', title: '3.6 การวิเคราะห์ข้อมูล', type: 'text', content: [
    'การคำนวณประสิทธิภาพความแม่นยำด้วย Confusion Matrix (Accuracy, Precision, Recall)',
    'การวิเคราะห์ความพึงพอใจด้วยค่าเฉลี่ย (Mean) และส่วนเบี่ยงเบนมาตรฐาน (S.D.)'
  ]},

  // Chapter 4
  { chapterId: 'ch4', chapterTitle: 'บทที่ 4 ผลการดำเนินงาน', id: '4.1', title: '4.1 ผลการทดสอบ', type: 'testing' },
  { chapterId: 'ch4', chapterTitle: 'บทที่ 4 ผลการดำเนินงาน', id: '4.2', title: '4.2 ผลการประเมิน', type: 'results' },
  { chapterId: 'ch4', chapterTitle: 'บทที่ 4 ผลการดำเนินงาน', id: '4.3', title: '4.3 การวิเคราะห์ผล', type: 'analysis' },
  { chapterId: 'ch4', chapterTitle: 'บทที่ 4 ผลการดำเนินงาน', id: '4.4', title: 'ทดลองใช้ระบบจริง', type: 'demo' },

  // Chapter 5
  { chapterId: 'ch5', chapterTitle: 'บทที่ 5 สรุปผลโครงงาน', id: '5.1', title: '5.1 สรุปผลการวิจัย', type: 'summary' },
  { chapterId: 'ch5', chapterTitle: 'บทที่ 5 สรุปผลโครงงาน', id: '5.2', title: 'ข้อเสนอแนะและแนวทางพัฒนาต่อ', type: 'future' },
  { chapterId: 'ch5', chapterTitle: 'บทที่ 5 สรุปผลโครงงาน', id: '99', title: 'Thank You', type: 'thankYou' },
];
