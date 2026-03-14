import { motion } from "framer-motion";
import { Award, ExternalLink, FileText, CheckCircle, Clock } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  skills: string[];
  certUrl?: string;
  status?: "completed" | "in-progress" | "enrolled";
}

const certs: Cert[] = [
  {
    title: "Tata GenAI Data Analytics Simulation",
    issuer: "Tata Group | Forage",
    skills: ["Generative AI", "Data Analytics", "Business Intelligence"],
    certUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_691934eef6e23f7a00c06751_1766335516982_completion_certificate.pdf",
    status: "completed"
  },
  {
    title: "Cybersecurity Analyst Simulation",
    issuer: "Forage",
    skills: ["Network Security", "Threat Analysis", "Incident Response"],
    certUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_691934eef6e23f7a00c06751_1763916014304_completion_certificate.pdf",
    status: "completed"
  },
  {
    title: "Unstop Certificate",
    issuer: "Unstop",
    skills: ["Competitive Programming", "Problem Solving"],
    certUrl: "https://unstop.com/certificate-preview/50a1c054-a2e7-4897-ab82-9e8442f20ca7",
    status: "completed"
  },
  {
    title: "Unstop Leadership Certificate",
    issuer: "Unstop",
    skills: ["Team Leadership", "Event Management", "Public Speaking"],
    certUrl: "https://unstop.com/certificate-preview/2f9133db-b26d-4afa-b439-f58f5bb9e287",
    status: "completed"
  },
  {
    title: "Unstop Event Certificate",
    issuer: "Unstop",
    skills: ["Hackathon Participation", "Project Presentation"],
    certUrl: "https://unstop.com/certificate-preview/55f6f27f-a8ff-45e0-98a7-64d65ce41442",
    status: "completed"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    skills: ["Cloud Computing", "AWS Services", "Cloud Architecture"],
    certUrl: "https://www.linkedin.com/posts/ashwin-r-842aa9289_aws-activity-7410339833828716545--Ki6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYbc3IB7otzeJLm4DzvnUErxTA92JL48JM",
    status: "completed"
  },
  {
    title: "NPTEL Cloud Computing (Elite)",
    issuer: "IIT Kharagpur | NPTEL",
    skills: ["Distributed Systems", "Virtualization", "Cloud Security"],
    certUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7331641267027668992?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7331641267027668992%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=pKK75J09S2G%2FqZpmiN7X%2BA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B%2B1B7tFp8QnCiJH9GQplZig%3D%3D",
    status: "completed"
  },
  {
    title: "HP Data Science & Analytics",
    issuer: "HP",
    skills: ["Data Analysis", "Statistical Modeling", "Python"],
    certUrl: "https://mail.google.com/mail/u/0/#search/hp+/FMfcgzQZTCrjtdZCRzkRznLrcfWrRxfj?projector=1&messagePartId=0.1",
    status: "completed"
  },
  {
    title: "Infosys Springboard – Java",
    issuer: "Infosys",
    skills: ["Core Java", "OOP", "Spring Framework"],
    certUrl: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_013204562301591552112_shared/1-5881303e-4073-4c79-801e-c736fc4651d8.pdf",
    status: "completed"
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="font-display text-3xl font-bold mb-2">
          <span className="text-gradient-cyan">Certifications</span> & Achievements
        </h2>
        <p className="text-muted-foreground mb-10 text-sm">Verified credentials and professional development</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-4 flex flex-col hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Award className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
                {c.status === "in-progress" && (
                  <span className="flex items-center gap-1 text-[10px] font-mono shrink-0 text-yellow-400">
                    <Clock className="w-3 h-3" />
                    In Progress
                  </span>
                )}
                {c.status === "enrolled" && (
                  <span className="flex items-center gap-1 text-[10px] font-mono shrink-0 text-neon-blue">
                    <Clock className="w-3 h-3" />
                    Enrolled
                  </span>
                )}
                {c.status === "completed" && (
                  <CheckCircle className="w-3.5 h-3.5 text-neon-green shrink-0" />
                )}
              </div>

              <div className="flex flex-wrap gap-1 mb-3 flex-1">
                {c.skills.map((s) => (
                  <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>

              {c.certUrl && (
                <div className="flex gap-2">
                  <a 
                    href={c.certUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-neon rounded-md px-2.5 py-1.5 text-xs flex items-center gap-1"
                  >
                    <FileText className="w-3 h-3" /> View
                  </a>
                  <a 
                    href={c.certUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-neon-accent rounded-md px-2.5 py-1.5 text-xs flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" /> Verify
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;